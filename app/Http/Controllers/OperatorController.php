<?php

namespace App\Http\Controllers;

use App\Models\Operator;
use App\Http\Resources\OperatorResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OperatorController extends Controller
{
    public function index()
    {
        $operators = Operator::all();
        return Inertia::render('Dashboard', [
            'operators' => OperatorResource::collection($operators)
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
        ]);

        Operator::create($request->all());

        return redirect()->route('dashboard')->with('success', 'Operator created successfully.');
    }
    public function create(){

        return Inertia::render('Operator/Create');
        
    }
}
