<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FasilitasWisata extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['fasilitas_id', 'wisata_id'];

    public function wisata(){
        return $this->belongsTo(Wisata::class);
    }

     public function fasilitas(){
        return $this->belongsTo(Fasilitas::class);
    }
}
