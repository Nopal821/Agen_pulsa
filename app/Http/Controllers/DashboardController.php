<?php

namespace App\Http\Controllers;

use App\Models\Operator;
use App\Models\Prabayar;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $operators = Operator::all();
        $prabayar = Prabayar::all();

        return Inertia::render('Dashboard', [
            'operators' => $operators,
            'prabayar' => $prabayar,
        ]);
    }
}
