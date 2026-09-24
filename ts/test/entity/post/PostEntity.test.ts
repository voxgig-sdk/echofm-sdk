

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"post_id":{"a":true,"h":"Post Id","n":"post_id","r":false,"sh":"The post identifier","t":"`$INTEGER`","key$":"post_id","index$":0},"views":{"a":true,"h":"Views","n":"views","r":false,"sh":"Number of views for the post","t":"`$INTEGER`","key$":"views","index$":1}},"name":"post","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/views/{post_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":469191,"k":"param","n":"post_id","or":"post_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/views/{post_id}","q":{"exist":["post_id"]},"r":{},"s":[{"lit":"api"},{"lit":"views"},{"var":"post_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"post","name__orig":"post","Name":"Post","name_":"post","name-":"post","NAME":"POST","index$":0}, {"active":true,"entity":"post","key$":"BasicPostFlow","kind":"basic","name":"BasicPostFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"post_ref01","srcdatavar":"post_ref01_data","suffix":"_dt0"},"m":{"id":"post01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-post_ref01"}}],"index$":0}]}, 'Post', {"GET /api/views/{post_id}":{"protocol":"http","operationId":"getViews","responses":{"200":{"description":"Successfully retrieved view count","content":{"application/json":{"schema":{"type":"object","properties":{"views":{"type":"integer","description":"Number of views for the post","example":1234,"key$":"views"},"post_id":{"type":"integer","description":"The post identifier","example":469191,"key$":"post_id"}},"index$":0}}}},"404":{"description":"Post not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Post not found"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Internal server error"}}}}}}},"parameters":[{"name":"post_id","in":"path","required":true,"description":"The unique identifier of the post","schema":{"type":"integer","example":469191},"index$":0}],"securitySource":"unspecified"}})
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
    ['post01','post02','post03'],
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
  
