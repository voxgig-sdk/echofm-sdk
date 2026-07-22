<?php
declare(strict_types=1);

// Echofm SDK utility: prepare_body

class EchofmPrepareBody
{
    public static function call(EchofmContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
