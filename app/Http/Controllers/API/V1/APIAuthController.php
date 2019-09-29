<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class APIAuthController extends Controller
{
    public function register(Request $request) {
        try {
            $response = Auth::register($request->all());
            return json_encode($response);
        } catch (\Exception $e) {
            return json_encode(["error" => $e]);
        }
    }

    public function login(Request $request) {

    }
}
