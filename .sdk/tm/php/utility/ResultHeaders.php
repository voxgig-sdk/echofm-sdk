<?php
declare(strict_types=1);

// Echofm SDK utility: result_headers

class EchofmResultHeaders
{
    public static function call(EchofmContext $ctx): ?EchofmResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
