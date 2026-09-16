

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { EchofmSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ECHOFM_TEST_LIVE=TRUE.
  afterEach(liveDelay('ECHOFM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = EchofmSDK.test()
    const ent = testsdk.Post()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ECHOFM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"post_id","req":false,"short":"The post identifier","type":"`$INTEGER`","index$":0},{"active":true,"name":"views","req":false,"short":"Number of views for the post","type":"`$INTEGER`","index$":1}],"name":"post","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":469191,"kind":"param","name":"post_id","orig":"post_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/views/{post_id}","json":"{\"operationId\":\"getViews\",\"parameters\":[{\"description\":\"The unique identifier of the post\",\"in\":\"path\",\"name\":\"post_id\",\"required\":true,\"schema\":{\"example\":469191,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"post_id\":{\"description\":\"The post identifier\",\"example\":469191,\"type\":\"integer\"},\"views\":{\"description\":\"Number of views for the post\",\"example\":1234,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successfully retrieved view count\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Post not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Post not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/views/{post_id}","segments":[{"lit":"api"},{"lit":"views"},{"var":"post_id"}],"select":{"exist":["post_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["view"]]},"key$":"post","name__orig":"post","Name":"Post","name_":"post","name-":"post","NAME":"POST","index$":0}, {"active":true,"entity":"post","key$":"BasicPostFlow","kind":"basic","name":"BasicPostFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"post_ref01","srcdatavar":"post_ref01_data","suffix":"_dt0"},"match":{"id":"post01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-post_ref01"}}],"index$":0}]}, 'Post')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let post_ref01_data = Object.values(setup.data.existing.post)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const post_ref01_ent = client.Post()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/post/PostTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = EchofmSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['post01','post02','post03','view01','view02','view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ECHOFM_TEST_POST_ENTID': idmap,
    'ECHOFM_TEST_LIVE': 'FALSE',
    'ECHOFM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ECHOFM_TEST_POST_ENTID']

  const live = 'TRUE' === env.ECHOFM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ECHOFM_TEST_POST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new EchofmSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ECHOFM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
