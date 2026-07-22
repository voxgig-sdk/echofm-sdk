<?php
declare(strict_types=1);

// Echofm SDK configuration

class EchofmConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Echofm",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://echofm.online",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "post" => [],
                ],
            ],
            "entity" => [
        'post' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'post_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'view',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
          ],
          'name' => 'post',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 469191,
                        'kind' => 'param',
                        'name' => 'post_id',
                        'orig' => 'post_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/views/{post_id}',
                  'parts' => [
                    'api',
                    'views',
                    '{post_id}',
                  ],
                  'select' => [
                    'exist' => [
                      'post_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'view',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return EchofmFeatures::make_feature($name);
    }
}
