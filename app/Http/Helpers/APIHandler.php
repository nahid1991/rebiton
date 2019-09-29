<?php


namespace App\Http\Helpers;


class APIHandler
{
    private $curl;

    public function __construct($url, $returnTransfer = true, $encoding = "", $timeout = 30000,
                                $httpVersion = CURL_HTTP_VERSION_1_1, $customRequest = "GET",
                                $postFields = null,
                                $httpHeader = array(
                                    // Set Here Your Requesred Headers
                                    'Content-Type: application/json',
                                ))
    {
        $this->curl = curl_init();
        curl_setopt_array($this->curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => $returnTransfer,
            CURLOPT_ENCODING => $encoding,
            CURLOPT_TIMEOUT => $timeout,
            CURLOPT_HTTP_VERSION => $httpVersion,
            CURLOPT_CUSTOMREQUEST => $customRequest,
            CURLOPT_HTTPHEADER => $httpHeader,
            CURLOPT_POSTFIELDS => $postFields
        ));
    }

    public function call()
    {
        $response = json_decode(curl_exec($this->curl), true);
        $err = curl_error($this->curl);
        curl_close($this->curl);

        return ['response'=>$response, 'err'=>$err];
    }
}
