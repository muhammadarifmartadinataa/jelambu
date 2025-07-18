<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fasilitas extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['nama', 'icon'];

    public function wisata(){
        return $this->belongsToMany(Wisata::class, 'fasilitas_wisatas');
    }
}
