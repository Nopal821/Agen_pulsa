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
}
