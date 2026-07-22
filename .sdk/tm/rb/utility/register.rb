# Echofm SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

EchofmUtility.registrar = ->(u) {
  u.clean = EchofmUtilities::Clean
  u.done = EchofmUtilities::Done
  u.make_error = EchofmUtilities::MakeError
  u.feature_add = EchofmUtilities::FeatureAdd
  u.feature_hook = EchofmUtilities::FeatureHook
  u.feature_init = EchofmUtilities::FeatureInit
  u.fetcher = EchofmUtilities::Fetcher
  u.make_fetch_def = EchofmUtilities::MakeFetchDef
  u.make_context = EchofmUtilities::MakeContext
  u.make_options = EchofmUtilities::MakeOptions
  u.make_request = EchofmUtilities::MakeRequest
  u.make_response = EchofmUtilities::MakeResponse
  u.make_result = EchofmUtilities::MakeResult
  u.make_point = EchofmUtilities::MakePoint
  u.make_spec = EchofmUtilities::MakeSpec
  u.make_url = EchofmUtilities::MakeUrl
  u.param = EchofmUtilities::Param
  u.prepare_auth = EchofmUtilities::PrepareAuth
  u.prepare_body = EchofmUtilities::PrepareBody
  u.prepare_headers = EchofmUtilities::PrepareHeaders
  u.prepare_method = EchofmUtilities::PrepareMethod
  u.prepare_params = EchofmUtilities::PrepareParams
  u.prepare_path = EchofmUtilities::PreparePath
  u.prepare_query = EchofmUtilities::PrepareQuery
  u.result_basic = EchofmUtilities::ResultBasic
  u.result_body = EchofmUtilities::ResultBody
  u.result_headers = EchofmUtilities::ResultHeaders
  u.transform_request = EchofmUtilities::TransformRequest
  u.transform_response = EchofmUtilities::TransformResponse
}
