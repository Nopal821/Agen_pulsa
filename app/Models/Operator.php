<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Operator extends Model
{
    use HasFactory;

    protected $table = 'operator';

    protected $fillable = [
        'operator_name',
    ];

    // Anda bisa menambahkan relasi jika ada hubungan dengan model lain di sini
}
