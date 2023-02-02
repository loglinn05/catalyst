<?php

namespace App\Actions\Users;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Lorisleiva\Actions\Concerns\AsAction;

class ChangePasswordAction
{
    use AsAction;

    public function handle($userId, $oldPassword, $newPassword)
    {
        $user = User::findOrFail($userId);

        if (!Hash::check($oldPassword, $user->password)) {
            return false;
        }

        $user->password = Hash::make($newPassword);

        if (!$user->save()) {
            return false;
        } else {
            return true;
        }
    }
}
