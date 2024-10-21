<?php
namespace App\Http\Controllers;

use App\Models\Prabayar;
use App\Models\Operator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrabayarController extends Controller
{
    public function index()
    {
        $prabayarData = Prabayar::all();
        return Inertia::render('Prabayar/Index', ['prabayar' => $prabayarData]);
    }

    public function create()
    {
        $operators = Operator::all(); // Fetch all operators
        return Inertia::render('Prabayar/Create', ['operators' => $operators]); // Pass operators to the view
    }

    public function store(Request $request)
    {
        try {
            // Validasi input
            $request->validate([
                'operator_name' => 'required|string|max:255',
                'expired' => 'nullable|date',
                'price' => 'required|numeric',
                'jenis' => 'required|string|max:255',
            ]);
    
            // Buat data baru di tabel prabayar
            Prabayar::create($request->only('operator_name', 'expired', 'price', 'jenis'));
    
            // Redirect ke dashboard dengan pesan sukses
            return redirect()->route('dashboard')->with('success', 'Prabayar created successfully.');
        } catch (\Exception $e) {
            // Log error
            \Log::error('Failed to create Prabayar: ' . $e->getMessage());
    
            // Redirect kembali dengan pesan error
            return redirect()->back()->withErrors(['error' => 'Failed to create Prabayar.'])->withInput();
        }
    }
    

    public function edit($id)
    {
        $prabayar = Prabayar::findOrFail($id);
        return Inertia::render('Prabayar/Edit', ['prabayar' => $prabayar]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
            'expired' => 'nullable|date',
            'price' => 'required|numeric',
            'jenis' => 'required|string|max:255',
        ]);

        $prabayar = Prabayar::findOrFail($id);
        $prabayar->update($request->only('operator_name', 'expired', 'price', 'jenis'));

        return redirect()->route('prabayar.index')->with('success', 'Prabayar updated successfully.');
    }

    public function destroy($id)
    {
        $prabayar = Prabayar::findOrFail($id);
        $prabayar->delete();

        return redirect()->route('prabayar.index')->with('success', 'Prabayar deleted successfully.');
    }
}
