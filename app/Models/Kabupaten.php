<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kabupaten extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['nama_kabupaten'];

    public function wisata(){
        return $this->hasMany(Wisata::class);
    }
}
