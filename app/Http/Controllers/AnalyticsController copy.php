<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

use Dub\Dub;
use Dub\Models\Operations;
use Throwable;

class AnalyticsController extends Controller
{
    protected Dub $dub;

    public function __construct()
    {
        $this->dub = Dub::builder()
            ->setSecurity(config('dub.api_key'))
            // ->baseUrl(config('dub.base_url'))
            // ->timeout(config('dub.timeout', 10))
            ->build();
    }

    protected function handleSdkResponse($response): array
    {
        // Speakeasy SDK responses include a PSR-7 rawResponse with status code and body.
        $status = property_exists($response, 'statusCode') ? $response->statusCode : 200;
        $raw = property_exists($response, 'rawResponse') ? $response->rawResponse : null;

        if ($raw) {
            $body = (string) $raw->getBody();
            if ($status >= 400) {
                abort($status, $body ?: 'Upstream error from Dub');
            }
            $json = json_decode($body, true);
            return is_array($json) ? $json : [];
        }

        // Fallback: attempt to coerce typed models to arrays
        if ($status >= 400) {
            abort($status, 'Upstream error from Dub');
        }
        return json_decode(json_encode($response), true) ?? [];
    }

    public function summary(Request $request): JsonResponse
    {
        $data = $request->validate([
            'start' => ['required', 'date_format:Y-m-d'],
            'end'   => ['required', 'date_format:Y-m-d'],
        ]);

        $payload = $this->dub->analytics->retrieve(
            request: new Operations\RetrieveAnalyticsRequest(
                // start: $data['start'],
                // end: $data['end'],
            )
        );

        return response()->json($payload->oneOf);
    }

    public function timeseries(Request $request): JsonResponse
    {
        $data = $request->validate([
            'start'    => ['required', 'date_format:Y-m-d'],
            'end'      => ['required', 'date_format:Y-m-d'],
            'metric'   => ['nullable', 'in:clicks,leads,sales'],
            'interval' => ['nullable', 'in:24h,7d,30d,90d,1y,mtd,qtd,ytd,all'],
        ]);

        $data['metric'] = $data['metric'] ?? 'clicks';
        $data['interval'] = $data['interval'] ?? 'day';

        $payload = $this->dub->analytics->retrieve(
            request: new Operations\RetrieveAnalyticsRequest(
                groupBy: Operations\GroupBy::Timeseries,
                // start: $data['start'],
                // end: $data['end'],
            )
        );

        return response()->json($payload->responseBodies);
    }

    public function breakdown(Request $request): JsonResponse
    {
        $data = $request->validate([
            'start' => ['required', 'date_format:Y-m-d'],
            'end'   => ['required', 'date_format:Y-m-d'],
            'by'    => ['required', 'in:link,referrer,country,device,os,browser'],
            'limit' => ['nullable', 'integer', 'min:1', 'max:100'],
        ]);

        $data['limit'] = $data['limit'] ?? 10;

        $cacheKey = sprintf(
            'dub:breakdown:%s:%s:%s:%s',
            $data['by'],
            $data['start'],
            $data['end'],
            $data['limit']
        );

        $payload = Cache::remember($cacheKey, now()->addMinutes(5), function () use ($data) {
            try {
                $req = new Operations\GetAnalyticsBreakdownRequest(
                    start: $data['start'],
                    end: $data['end'],
                    by: $data['by'],
                    limit: $data['limit']
                );
                $res = $this->dub->analytics->getBreakdown($req);
                return $this->handleSdkResponse($res);
            } catch (Throwable $e) {
                abort(502, $e->getMessage());
            }
        });

        return response()->json($payload);
    }
}

function config($key, $default = null) {
    $configs = [
        'dub.api_key' => env('DUB_API_KEY'),
        'dub.base_url' => 'https://api.dub.co',
        'dub.timeout' => 10,
    ];
    return $configs[$key] ?? $default;
}
