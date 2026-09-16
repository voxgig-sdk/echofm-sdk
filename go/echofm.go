package voxgigechofmsdk

import (
	"github.com/voxgig-sdk/echofm-sdk/go/core"
	"github.com/voxgig-sdk/echofm-sdk/go/entity"
	"github.com/voxgig-sdk/echofm-sdk/go/feature"
	_ "github.com/voxgig-sdk/echofm-sdk/go/utility"
)

// Type aliases preserve external API.
type EchofmSDK = core.EchofmSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type EchofmEntity = core.EchofmEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type EchofmError = core.EchofmError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewPostEntityFunc = func(client *core.EchofmSDK, entopts map[string]any) core.EchofmEntity {
		return entity.NewPostEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewEchofmSDK = core.NewEchofmSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewEchofmSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *EchofmSDK  { return NewEchofmSDK(nil) }
func Test() *EchofmSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
