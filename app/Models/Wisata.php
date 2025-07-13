<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Wisata extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'galeri' => 'array'
    ];

    protected $fillable = [
        'nama', 
        'slug',
        'lokasi', 
        'deskripsi', 
        'galeri', 
        'rating', 
        'latitude', 
        'longitude', 
        'thumbnail', 
        'video', 
        'kabupaten_id',
        'maps_link',
        'twitter_keyword'
    ];

    
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($wisata) {
            $wisata->slug = Str::slug($wisata->nama);
        });

        static::updating(function ($wisata) {
            $wisata->slug = Str::slug($wisata->nama);
        });
    }

    public function kabupaten(){
        return $this->belongsTo(Kabupaten::class);
    }

     public function fasilitas(){
        return $this->belongsToMany(Fasilitas::class, 'fasilitas_wisatas');
    }
}
