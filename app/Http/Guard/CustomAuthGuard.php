<?php


namespace App\Http\Guard;

use App\Http\Helpers\APIHandler;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;

class CustomAuthGuard implements Guard
{
    protected $user;
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Determine if the current user is authenticated.
     *
     * @return bool
     */
    public function check() {
        return (bool)$this->user();
    }

    /**
     * Determine if the current user is a guest.
     *
     * @return bool
     */
    public function guest() {
        return !$this->check();
    }

    /**
     * Get the currently authenticated user.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function user() {
        return $this->user;
    }

    /**
     * Get the ID for the currently authenticated user.
     *
     * @return int|string|null
     */
    public function id() {
        $user = $this->user();
        return $user->id ?? null;
    }

    /**
     * Validate a user's credentials.
     *
     * @param  array  $credentials
     * @return bool
     */
    public function validate(array $credentials = []) {
        throw new \BadMethodCallException('Unexpected method call');
    }

    /**
     * Set the current user.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
     * @return CustomAuthGuard
     */
    public function setUser(Authenticatable $user) {
        $this->user = $user;
        return $this;
    }

    public function attempt($credentials)
    {
        // Implement your logic here
        // Return User on success, or return null on failure
        return $credentials['email'];
    }

    public function register($credentials) {
        $regApiHandler = new APIHandler("https://exercise.api.rebiton.com/auth/register", $customRequest = "POST",
            $postFields = $credentials);
        $response = $regApiHandler->call();
        if ($response['err']) {
            throw new \Exception($response['err']);
        }
//        $this->raiseException($response);
        $response = json_decode($response, true);
        $token = $response['token'];
        $userApiHandler = new APIHandler("https://exercise.api.rebiton.com/user", $customRequest = "GET",
            $httpHeader = array(
                // Set Here Your Requested Headers
                'Content-Type: application/json',
                'Authorization: '.$response['data']['token_type'].' '.$response['token']
            ));
        $response = $userApiHandler->call();
//        $this->raiseException($response);
        $response = json_decode($response, true);
        $response['data']['token'] = $token;
        return $response;
    }
}
