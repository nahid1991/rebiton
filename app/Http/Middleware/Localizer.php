<?php

namespace App\Http\Middleware;

use App\Http\Helpers\APIHandler;
use Closure;
use Illuminate\Support\Facades\App;

class Localizer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $apiHandler = new APIHandler("https://exercise.api.rebiton.com/language");
        $response = $apiHandler->call();

        if ($response['err']) {
            echo "cURL Error #:" . $response['err'];
        } else {
            App::setLocale($response["response"]["data"]["language"]);
        }

        return $next($request);
    }
}
