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
        if (Password::PASSWORD_RESET) {
            return response()->json([
                'message' => 'Password reset succeeded.',
                'response' => $response
            ]);
        } else {
            return response()->json([
                'errors' => [
                    'The password reset request was received from an account with a different e-mail address.'
                ],
                'response' => $response
            ], 500);
        }
    }
}
