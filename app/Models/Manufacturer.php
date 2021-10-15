<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\ManufacturerDocument;

class Manufacturer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    public static function create(array $data)
    {
        // manufacturer
        $manufacturer = new self();
        $manufacturer->name = $data['name'];
        $manufacturer->save();

        return $manufacturer;
    }

    public static function findOrCreate($name)
    {
        // manufacturer
        $manufacturer = self::firstOrCreate(['name' => $name]);

        return $manufacturer;
    }

    public function documents()
    {
        return $this->hasMany(ManufacturerDocument::class);
    }
}
