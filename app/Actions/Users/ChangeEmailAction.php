<?php

namespace App\Actions\Users;

use App\Models\User;
use Lorisleiva\Actions\Concerns\AsAction;

class ChangeEmailAction
{
    use AsAction;

    public function handle($userId, $newEmail)
    {
        $user = User::findOrFail($userId);
        $user->email = $newEmail;
        if (!$user->save()) {
            return false;
        } else {
            return true;
        }
    }
}
