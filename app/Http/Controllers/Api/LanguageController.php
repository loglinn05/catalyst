<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function switchLanguage(Request $request)
    {
        if (array_key_exists($request->userLocale, Config::get('languages'))) {
            Session::put('locale', $request->userLocale);
        }
        return Session::get('locale');
    }
}
