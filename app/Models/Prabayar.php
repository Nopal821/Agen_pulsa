<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;


class Prabayar extends Model
{
    use HasFactory;
    use HasApiTokens;

    protected $table = 'prabayar';

    protected $fillable = [
        'operator_name',
        'expired',
        'price',
        'jenis',
    ];

    protected $casts = [
        'price' => 'decimal:2',
    ];
}
