<?php
declare(strict_types=1);

// Echofm SDK exists test

require_once __DIR__ . '/../echofm_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = EchofmSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
