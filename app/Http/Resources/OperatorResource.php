<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OperatorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'operator_name' => $this->operator_name,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
            'created_at_formatted' => $this->created_at->format('d M Y, H:i'), // Format yang lebih ramah pengguna
            'updated_at_formatted' => $this->updated_at->format('d M Y, H:i'), // Format yang lebih ramah pengguna
            'links' => [ // Tambahan links jika diperlukan
                'self' => route('operator.show', $this->id),
                'edit' => route('operator.edit', $this->id),
            ],
        ];
    }
}
