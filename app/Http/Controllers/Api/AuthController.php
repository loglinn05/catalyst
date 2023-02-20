<?php

namespace App\Http\Controllers\Api;

use App\Actions\Auth\ForgotPasswordAction;
use App\Actions\Auth\LoginAction;
use App\Actions\Auth\RegisterAction;
use App\Actions\Auth\ResetPasswordAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetPasswordRequest;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {
        return LoginAction::run($request);
    }

    public function register(RegisterRequest $request) {
        if(RegisterAction::run($request)) {
            return response()->json(["success" => true, "message" => "Registration succeeded."]);
        } else {
            return response()->json([
                "success" => false,
                "errors" => ["Registration failed because of a server-side error."]
            ], 500);
        }
    }

    public function forgotPassword(ForgotPasswordRequest $request) {
        return ForgotPasswordAction::run($request);
    }

    public function resetPassword(ResetPasswordRequest $request) {
        $credentials = $request->only(
            'email', 'password', 'password_confirmation', 'token'
        );
        return ResetPasswordAction::run($credentials);
    }
}
