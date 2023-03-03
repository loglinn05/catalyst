<?php

namespace App\Actions\Auth;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;

class ResetPasswordAction
{
    use AsAction;

    public function handle($formData)
    {
        $response = Password::broker()->reset(
            $formData,
            function ($user, $password) {
                $user->password = Hash::make($password);
                $user->setRememberToken(Str::random(60));
                $user->save();
                event(new PasswordReset($user));
            }
        );
        if ($response == Password::PASSWORD_RESET) {
            return response()->json([
                'message' => __('messages.passwordResetSucceeded'),
                'response' => $response
            ]);
        } else {
            return response()->json([
                'errors' => [
                    __('messages.passwordResetFailed')
                ],
                'response' => $response
            ], 500);
        }
    }
}
