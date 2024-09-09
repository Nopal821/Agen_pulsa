<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prabayar extends Model
{
    use HasFactory;

    protected $table = 'prabayar';

    protected $fillable = [
        'operator_name',
        'expired',
        'price',
        'jenis',
    ];

    protected $casts = [
        'expired' => 'date',
        'price' => 'decimal:2',
    ];
}
