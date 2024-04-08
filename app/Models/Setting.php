<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Setting extends Authenticatable
{
    use HasApiTokens, HasFactory;

    protected $table = "settings";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
    ];
}
