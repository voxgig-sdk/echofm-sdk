# Echofm SDK configuration

module EchofmConfig
  def self.make_config
    {
      "main" => {
        "name" => "Echofm",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://echofm.online",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "post" => {},
        },
      },
      "entity" => {
        "post" => {
          "fields" => [
            {
              "active" => true,
              "name" => "post_id",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "views",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 1,
            },
          ],
          "name" => "post",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => 469191,
                        "kind" => "param",
                        "name" => "post_id",
                        "orig" => "post_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "index$" => 0,
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/views/{post_id}",
                  "parts" => [
                    "api",
                    "views",
                    "{post_id}",
                  ],
                  "select" => {
                    "exist" => [
                      "post_id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "view",
              ],
            ],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    EchofmFeatures.make_feature(name)
  end
end
