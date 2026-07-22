<?php
declare(strict_types=1);

// Echofm SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class EchofmFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new EchofmBaseFeature();
            case "test":
                return new EchofmTestFeature();
            default:
                return new EchofmBaseFeature();
        }
    }
}
