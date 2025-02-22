<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
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

    // $token = $user->createToken('auth_token')->plainTextToken;

    return $user;
    
    // response()->json([
    //     // 'token' => $token,
    //     'user' => $user
    // ], 201);
}

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials.'],
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
