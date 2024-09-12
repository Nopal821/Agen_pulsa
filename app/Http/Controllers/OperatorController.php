<?php

namespace App\Http\Controllers;

use App\Models\Operator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OperatorController extends Controller
{
    public function index()
    {
        $operators = Operator::all();
        return Inertia::render('Operator/Index', [
            'operators' => $operators
        ]);
    }

    public function create()
    {
        return Inertia::render('Operator/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
        ]);

        Operator::create($request->all());

        return redirect()->route('dashboard')->with('success', 'Operator created successfully.');
    }

    public function edit($id)
    {
        $operator = Operator::findOrFail($id);
        return Inertia::render('Operator/Edit', [
            'operator' => $operator
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
        ]);

        $operator = Operator::findOrFail($id);
        $operator->update($request->all());

        return redirect()->route('dashboard')->with('success', 'Operator updated successfully.');
    }

    public function destroy($id)
    {
        $operator = Operator::findOrFail($id);
        $operator->delete();

        return redirect()->route('dashboard')->with('success', 'Operator deleted successfully.');
    }
}
