<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Prabayar;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PrabayarResource extends JsonResource
{
    public function index()
    {
        $prabayar = Prabayar::all();
        return Inertia::render('Prabayar/Index', [
            'prabayar' => $prabayar
        ]);
    }

    

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'operator_name' => $this->operator_name,
            'expired' => $this->expired->format('Y-m-d'),
            'price' => $this->price,
            'jenis' => $this->jenis,
            'created_at' => $this->created_at->toDateTimeString(),
            'updated_at' => $this->updated_at->toDateTimeString(),
        ];
    }
}
