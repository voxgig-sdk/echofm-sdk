<?php
declare(strict_types=1);

// Echofm SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

EchofmUtility::setRegistrar(function (EchofmUtility $u): void {
    $u->clean = [EchofmClean::class, 'call'];
    $u->done = [EchofmDone::class, 'call'];
    $u->make_error = [EchofmMakeError::class, 'call'];
    $u->feature_add = [EchofmFeatureAdd::class, 'call'];
    $u->feature_hook = [EchofmFeatureHook::class, 'call'];
    $u->feature_init = [EchofmFeatureInit::class, 'call'];
    $u->fetcher = [EchofmFetcher::class, 'call'];
    $u->make_fetch_def = [EchofmMakeFetchDef::class, 'call'];
    $u->make_context = [EchofmMakeContext::class, 'call'];
    $u->make_options = [EchofmMakeOptions::class, 'call'];
    $u->make_request = [EchofmMakeRequest::class, 'call'];
    $u->make_response = [EchofmMakeResponse::class, 'call'];
    $u->make_result = [EchofmMakeResult::class, 'call'];
    $u->make_point = [EchofmMakePoint::class, 'call'];
    $u->make_spec = [EchofmMakeSpec::class, 'call'];
    $u->make_url = [EchofmMakeUrl::class, 'call'];
    $u->param = [EchofmParam::class, 'call'];
    $u->prepare_auth = [EchofmPrepareAuth::class, 'call'];
    $u->prepare_body = [EchofmPrepareBody::class, 'call'];
    $u->prepare_headers = [EchofmPrepareHeaders::class, 'call'];
    $u->prepare_method = [EchofmPrepareMethod::class, 'call'];
    $u->prepare_params = [EchofmPrepareParams::class, 'call'];
    $u->prepare_path = [EchofmPreparePath::class, 'call'];
    $u->prepare_query = [EchofmPrepareQuery::class, 'call'];
    $u->result_basic = [EchofmResultBasic::class, 'call'];
    $u->result_body = [EchofmResultBody::class, 'call'];
    $u->result_headers = [EchofmResultHeaders::class, 'call'];
    $u->transform_request = [EchofmTransformRequest::class, 'call'];
    $u->transform_response = [EchofmTransformResponse::class, 'call'];
});
