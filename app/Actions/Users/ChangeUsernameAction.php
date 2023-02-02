<?php

namespace App\Actions\Users;

use App\Models\User;
use Lorisleiva\Actions\Concerns\AsAction;

class ChangeUsernameAction
{
    use AsAction;

    public function handle($userId, $newUsername)
    {
        $user = User::findOrFail($userId);
        $user->name = $newUsername;
        if (!$user->save()) {
            return false;
        } else {
            return true;
        }
    }
}
