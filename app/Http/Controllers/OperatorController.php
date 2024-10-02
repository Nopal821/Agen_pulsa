<?php

namespace App\Http\Controllers;

use App\Models\Operator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OperatorController extends Controller
{
    // Menampilkan semua operator di halaman index
    public function index()
    {
        $operators = Operator::all();
        return Inertia::render('Operator/Index', [
            'operators' => $operators,
        ]);
    }

    // Menampilkan form untuk menambah operator baru
    public function create()
    {
        return Inertia::render('Operator/Create');
    }

    // Menyimpan operator baru ke database
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'operator_name' => 'required|string|max:255',
        ]);

        // Menyimpan data ke database
        Operator::create($request->only('operator_name'));

        // Redirect ke dashboard dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Operator created successfully.');
    }

    // Menampilkan form edit untuk operator yang dipilih
    public function edit($id)
    {
        $operator = Operator::findOrFail($id);
        return Inertia::render('Operator/Edit', [
            'operator' => $operator,
        ]);
    }
    

    // Memperbarui data operator
    public function update(Request $request, $id)
    {
        // Validasi input
        $request->validate([
            'operator_name' => 'required|string|max:255',
        ]);

        // Mendapatkan operator berdasarkan id
        $operator = Operator::findOrFail($id);

        // Update data operator
        $operator->update($request->only('operator_name'));

        // Redirect ke dashboard dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Operator updated successfully.');
    }

    // Menghapus operator berdasarkan id
    public function destroy($id)
    {
        // Mendapatkan operator berdasarkan id
        $operator = Operator::findOrFail($id);

        // Menghapus operator dari database
        $operator->delete();

        // Redirect ke dashboard dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Operator deleted successfully.');
    }

    // Menampilkan konfirmasi delete operator
    public function delete($id)
    {
        // Mendapatkan operator berdasarkan id
        $operator = Operator::findOrFail($id);
        return Inertia::render('Operator/Delete', [
            'operator' => $operator
        ]);
    }
}
