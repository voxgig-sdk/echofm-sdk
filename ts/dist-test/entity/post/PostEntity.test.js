"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ECHOFM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ECHOFM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.EchofmSDK.test();
        const ent = testsdk.Post();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ECHOFM_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'post.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "post_id", "req": false, "short": "The post identifier", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "views", "req": false, "short": "Number of views for the post", "type": "`$INTEGER`", "index$": 1 }], "name": "post", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 469191, "kind": "param", "name": "post_id", "orig": "post_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /api/views/{post_id}", "json": "{\"operationId\":\"getViews\",\"parameters\":[{\"description\":\"The unique identifier of the post\",\"in\":\"path\",\"name\":\"post_id\",\"required\":true,\"schema\":{\"example\":469191,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"post_id\":{\"description\":\"The post identifier\",\"example\":469191,\"type\":\"integer\"},\"views\":{\"description\":\"Number of views for the post\",\"example\":1234,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successfully retrieved view count\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Post not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Post not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/views/{post_id}", "segments": [{ "lit": "api" }, { "lit": "views" }, { "var": "post_id" }], "select": { "exist": ["post_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["view"]] }, "key$": "post", "name__orig": "post", "Name": "Post", "name_": "post", "name-": "post", "NAME": "POST", "index$": 0 }, { "active": true, "entity": "post", "key$": "BasicPostFlow", "kind": "basic", "name": "BasicPostFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "post_ref01", "srcdatavar": "post_ref01_data", "suffix": "_dt0" }, "match": { "id": "post01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-post_ref01" } }], "index$": 0 }] }, 'Post');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let post_ref01_data = Object.values(setup.data.existing.post)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const post_ref01_ent = client.Post();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/post/PostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.EchofmSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['post01', 'post02', 'post03', 'view01', 'view02', 'view03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ECHOFM_TEST_POST_ENTID': idmap,
        'ECHOFM_TEST_LIVE': 'FALSE',
        'ECHOFM_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ECHOFM_TEST_POST_ENTID'];
    const live = 'TRUE' === env.ECHOFM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ECHOFM_TEST_POST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.EchofmSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=PostEntity.test.js.map