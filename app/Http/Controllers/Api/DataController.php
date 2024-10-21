<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Operator;
use App\Models\Prabayar;
use Illuminate\Http\Request;

class DataController extends Controller
{
    // Fetch all operators
    public function getOperators()
    {
        $operators = Operator::all();
        return response()->json($operators, 200); // Return data with HTTP 200 status
    }

    // Fetch all prabayar
    public function getPrabayar()
    {
        $prabayar = Prabayar::all();
        return response()->json($prabayar, 200); // Return data with HTTP 200 status
    }
}
