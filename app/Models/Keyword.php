<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['keyword'];
}
