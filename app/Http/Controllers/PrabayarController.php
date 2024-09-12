<?php

namespace App\Http\Controllers;

use App\Models\Prabayar;
use App\Models\Operator; // Import model Operator
use App\Http\Resources\PrabayarResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrabayarController extends Controller
{
    public function index()
    {
        $prabayar = Prabayar::all();
        return Inertia::render('Dashboard', [
            'prabayar' => PrabayarResource::collection($prabayar)
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
            'expired' => 'nullable|date',
            'price' => 'nullable|numeric',
            'jenis' => 'nullable|string|max:255',
        ]);

        Prabayar::create($request->all());
        return Inertia::render('Prabayar/Create');
    }

    public function create()
    {
        $operators = Operator::all(); // Ambil data operator
        return Inertia::render('Prabayar/Create', [
            'operators' => $operators // Kirim data operators ke komponen CreatePrabayar
        ]);
    }
}
