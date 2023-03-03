<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\LanguageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/user', [UsersController::class, 'user']);
    Route::post('/change-username', [UsersController::class, 'changeUsername']);
    Route::post('/change-email', [UsersController::class, 'changeEmail']);
    Route::post('/change-password', [UsersController::class, 'changePassword']);
});
Route::post("setLocale", [LanguageController::class, "switchLanguage"]);
Route::post("register", [AuthController::class, "register"]);
Route::post("login", [AuthController::class, "login"]);
Route::post("forgot-password", [AuthController::class, "forgotPassword"]);
Route::post("reset-password", [AuthController::class, "resetPassword"]);
