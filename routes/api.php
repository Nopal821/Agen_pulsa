<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OperatorController;
use App\Http\Controllers\PrabayarController;
use App\Http\Resources\OperatorResource;
use App\Http\Resources\PrabayarResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Operator Routes
Route::get('/operators', function() {
    return OperatorResource::collection(App\Models\Operator::all());
});

Route::get('/operators/{id}', function($id) {
    return new OperatorResource(App\Models\Operator::findOrFail($id));
});

Route::post('/operators', [OperatorController::class, 'store']);

Route::put('/operators/{id}', [OperatorController::class, 'update']);

Route::delete('/operators/{id}', [OperatorController::class, 'destroy']);

Route::get('/operator/{id}', [OperatorController::class, 'show'])->name('operator.show');


// Prabayar Routes
Route::get('/prabayar', [PrabayarController::class, 'index']); // Updated
Route::get('/prabayar/{id}', [PrabayarController::class, 'show']); // Updated
Route::post('/prabayar', [PrabayarController::class, 'store']); // Ensure this is store
Route::put('/prabayar/{id}', [PrabayarController::class, 'update']);
Route::delete('/prabayar/{id}', [PrabayarController::class, 'destroy']);