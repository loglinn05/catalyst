<?php

namespace App\Actions\Auth;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Lorisleiva\Actions\Concerns\AsAction;

class RegisterAction
{
    use AsAction;

    public function handle($formData)
    {
        $user = User::create([
            'name' => $formData->name,
            'email' => $formData->email,
            'password' => Hash::make($formData->password)
        ]);

        if (!$user) {
            return false;
        }

        $userRole = Role::user()->first();
        $user->roles()->attach($userRole->id);

        return true;
    }
}
