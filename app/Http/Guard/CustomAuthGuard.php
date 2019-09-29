<?php


namespace App\Http\Guard;
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
        return $this->user ?: $this->attempt();
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

    protected function attempt()
    {
        // Implement your logic here
        // Return User on success, or return null on failure
    }
}
