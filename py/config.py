# Echofm SDK configuration


def make_config():
    return {
        "main": {
            "name": "Echofm",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://echofm.online",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "post": {},
            },
        },
        "entity": {
      "post": {
        "fields": [
          {
            "active": True,
            "name": "post_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "view",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
        ],
        "name": "post",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 469191,
                      "kind": "param",
                      "name": "post_id",
                      "orig": "post_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/views/{post_id}",
                "parts": [
                  "api",
                  "views",
                  "{post_id}",
                ],
                "select": {
                  "exist": [
                    "post_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "view",
            ],
          ],
        },
      },
    },
    }
