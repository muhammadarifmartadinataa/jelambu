<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wisata extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'galeri' => 'array'
    ];

    protected $fillable = [
        'nama', 
        'lokasi', 
        'deskripsi', 
        'galeri', 
        'rating', 
        'latitude', 
        'longitude', 
        'thumbnail', 
        'video', 
        'kabupaten_id'];

    public function kabupaten(){
        return $this->belongsTo(Kabupaten::class);
    }

     public function fasilitas(){
        return $this->hasMany(FasilitasWisata::class);
    }
}
