package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Echofm",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://echofm.online",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"post": map[string]any{},
			},
		},
		"entity": map[string]any{
			"post": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "post_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "view",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
				},
				"name": "post",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 469191,
											"kind": "param",
											"name": "post_id",
											"orig": "post_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
									},
								},
								"method": "GET",
								"orig": "/api/views/{post_id}",
								"parts": []any{
									"api",
									"views",
									"{post_id}",
								},
								"select": map[string]any{
									"exist": []any{
										"post_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"view",
						},
					},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
