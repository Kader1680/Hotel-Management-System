<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $validated = Validator::make($request->all(), [
        'first_name'   => 'required|string|max:255',
        'last_name'    => 'required|string|max:255',
        'role'         => 'required|in:guest,admin',
        'email'        => 'required',
        'password'     => 'required|string|min:8',
        'phone_number' => 'nullable|string|max:20',
    ]);

    if ($validated->fails()) {
        return response()->json(['errors' => $validated->errors()], 422);
    }

    $user = User::create([
        'first_name'   => $request->first_name,
        'last_name'    => $request->last_name,
        'role'         => $request->role,
        'email'        => $request->email,
        'password'     => Hash::make($request->password),
        'phone_number' => $request->phone_number,
    ]);

     
    return response()->json(['user created' => $user], 201);
    
}

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            // throw ValidationException::withMessages([
            //     'email' => ['Invalid credentials.'],
            // ]);
            return response()->json(['message' => 'Invalid Passoword or Email'], 401);
        }

        return response()->json(['user' => $user], 200);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
