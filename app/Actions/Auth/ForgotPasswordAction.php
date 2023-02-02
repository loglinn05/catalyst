<?php

namespace App\Actions\Auth;

use Illuminate\Support\Facades\Password;
use Lorisleiva\Actions\Concerns\AsAction;

class ForgotPasswordAction
{
    use AsAction;

    public function handle($formData)
    {
        $response = Password::broker()->sendResetLink(
            $formData->only('email')
        );

        if (Password::RESET_LINK_SENT) {
            return response()->json([
                'message' => 'E-mail sent.',
                'response' => $response
            ], 200);
        } else {
            return response()->json([
                'errors' => ['No such user.'],
                'response' => $response
            ], 500);
        }
    }
}