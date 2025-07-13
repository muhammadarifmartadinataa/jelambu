<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Kabupaten extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['nama_kabupaten', 'logo'];

    public function wisatas(){
        return $this->hasMany(Wisata::class);
    }
}
