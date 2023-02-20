<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function switchLang(Request $request)
    {
        if (array_key_exists($request->userLocale, Config::get('languages'))) {
            Session::put('applocale', $request->userLocale);
        }
        return Redirect::back();
    }
}
