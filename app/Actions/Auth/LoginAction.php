<?php

namespace App\Actions\Auth;

use Illuminate\Http\Request;
use Laravel\Passport\Client;
use Lorisleiva\Actions\Concerns\AsAction;

class LoginAction
{
    use AsAction;

    public function handle($formData)
    {
        $passwordGrantClient = Client::where('password_client', 1)->first();

        $data = [
            'grant_type' => 'password',
            'client_id' => $passwordGrantClient->id,
            'client_secret' => $passwordGrantClient->secret,
            'username' => $formData->email,
            'password' => $formData->password,
            'scope' => '*'
        ];

        $tokenRequest = Request::create('oauth/token', 'post', $data);
        $tokenResponse = app()->handle($tokenRequest);
        $contentString = $tokenResponse->getContent();
        $tokenContent = json_decode($contentString, true);

        if (!empty($tokenContent['access_token'])) {
            return $tokenResponse;
        } else {
            return response()->json([
                'errors' => ['Incorrect e-mail or password.']
            ], 401);
        }
    }
}
