
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://echofm.online',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      post: {
      },

    }
  }


  entity = {
    "post": {
      "fields": [
        {
          "active": true,
          "name": "post_id",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 0
        },
        {
          "active": true,
          "name": "view",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 1
        }
      ],
      "name": "post",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": 469191,
                    "kind": "param",
                    "name": "post_id",
                    "orig": "post_id",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "index$": 0
                  }
                ]
              },
              "method": "GET",
              "orig": "/api/views/{post_id}",
              "parts": [
                "api",
                "views",
                "{post_id}"
              ],
              "select": {
                "exist": [
                  "post_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "view"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config
}

