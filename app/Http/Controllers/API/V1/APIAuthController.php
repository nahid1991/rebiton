<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class APIAuthController extends Controller
{
    public function register(Request $request) {
        echo(Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')], false));
    }
}
