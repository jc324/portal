<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use App\Models\Client;


class AnalyticsController extends Controller
{
    protected function dubGet(string $path, array $query): array
    {
        $response = Http::withToken(config('dub.api_key'))
            ->baseUrl(config('dub.base_url'))
            ->timeout(config('dub.timeout', 10))
            ->acceptJson()
            ->get($path, $query);

        if ($response->failed()) {
            abort($response->status(), $response->body() ?: 'Upstream error from Dub');
        }

        return $response->json();
    }

    public function summary(Request $request): JsonResponse
    {
        $data = $request->validate([
            'event'   => ['nullable', 'in:clicks,leads,sales'],
            'interval' => ['nullable', 'in:24h,7d,30d,90d,1y,mtd,qtd,ytd,all'],
            'start' => ['required', 'date_format:Y-m-d'],
            'end'   => ['required', 'date_format:Y-m-d'],
        ]);
        $query = array_merge([
            'event' => "clicks",
            'groupBy' => "count",
            'interval' => "24h",
            'timezone' => "UTC"
        ], $data);

        $cacheKey = sprintf('dub:summary:%s:%s', $data['start'], $data['end']);
        $payload = Cache::remember($cacheKey, now()->addMinutes(5), function () use ($query) {
            return $this->dubGet('/analytics', $query);
        });

        return response()->json($payload);
    }

    public function timeseries(Request $request): JsonResponse
    {
        $data = $request->validate([
            'event'   => ['nullable', 'in:clicks,leads,sales'],
            'interval' => ['nullable', 'in:24h,7d,30d,90d,1y,mtd,qtd,ytd,all'],
            'start' => ['required', 'date_format:Y-m-d'],
            'end'     => ['required', 'date_format:Y-m-d'],
        ]);
        $query = array_merge([
            'event' => "clicks",
            'groupBy' => "timeseries",
            'interval' => "24h",
            'timezone' => "UTC"
        ], $data);

        $query['interval'] = $query['interval'] ?? '24h';

        $cacheKey = sprintf(
            'dub:timeseries:%s:%s:%s:%s',
            $data['start'],
            $data['end'],
            $data['event'],
            $data['interval']
        );
        $payload = Cache::remember($cacheKey, now()->addMinutes(5), function () use ($query) {
            $payload = $this->dubGet('/events', $query);
            if (!empty($payload)) {
                $clientIds = array_unique(array_map(fn($point) => $point['link']['title'], $payload));
                $clientNamesFromIds = Client::whereIn('id', $clientIds)->get(['id', 'business_name']);

                foreach ($payload as &$point) {
                    $client = $clientNamesFromIds->firstWhere('id', $point['link']['title']);
                    $point['client_business_name'] = $client ? $client->business_name : null;
                }
            }
            return $payload;
        });

        return response()->json($payload);
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
            return $this->dubGet('/analytics/breakdown', $data);
        });

        return response()->json($payload);
    }
}

function config($key, $default = null)
{
    $configs = [
        'dub.api_key' => env('DUB_API_KEY'),
        'dub.base_url' => 'https://api.dub.co',
        'dub.timeout' => 10,
    ];
    return $configs[$key] ?? $default;
}
