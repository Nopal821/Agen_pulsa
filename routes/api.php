<?php
use App\Http\Controllers\OperatorController;
use App\Http\controllers\DataController;
use App\http\controllers\PrabayarController;

Route::get('/operators', [DataController::class, 'getOperators']);
Route::get('/prabayars', [DataController::class, 'getPrabayar']);