<?php
declare(strict_types=1);

// Echofm SDK utility: result_body

class EchofmResultBody
{
    public static function call(EchofmContext $ctx): ?EchofmResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
