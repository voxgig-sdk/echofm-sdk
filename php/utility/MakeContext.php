<?php
declare(strict_types=1);

// Echofm SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class EchofmMakeContext
{
    public static function call(array $ctxmap, ?EchofmContext $basectx): EchofmContext
    {
        return new EchofmContext($ctxmap, $basectx);
    }
}
