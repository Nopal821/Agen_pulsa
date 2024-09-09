<?php

namespace App\Http\Controllers;

use App\Models\Prabayar;
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
}
