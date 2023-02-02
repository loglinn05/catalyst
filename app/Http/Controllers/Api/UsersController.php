<?php

namespace App\Http\Controllers\Api;

use App\Actions\Users\ChangeEmailAction;
use App\Actions\Users\ChangePasswordAction;
use App\Actions\Users\ChangeUsernameAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\ChangeEmailRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\ChangeUsernameRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function user() {
        return new UserResource(Auth::user());
    }

    public function changeUsername(ChangeUsernameRequest $request) {
        if(ChangeUsernameAction::run(Auth::id(), $request->name)) {
            return response()->json(["success" => true, "message" => "Username change succeeded."]);
        } else {
            return response()->json(["success" => false, "errors" => ["Failed to change username."]], 500);
        }
    }

    public function changeEmail(ChangeEmailRequest $request) {
        if(ChangeEmailAction::run(Auth::id(), $request->email)) {
            return response()->json(["success" => true, "message" => "E-mail change succeeded."]);
        } else {
            return response()->json(["success" => false, "errors" => ["Failed to change e-mail."]], 500);
        }
    }

    public function changePassword(ChangePasswordRequest $request) {
        if(ChangePasswordAction::run(
            Auth::id(),
            $request->old_password,
            $request->new_password
        )) {
            return response()->json(["success" => true, "message" => "Password change succeeded."]);
        } else {
            return response()->json(["success" => false, "errors" => ["Failed to change password."]], 500);
        }
    }
}
