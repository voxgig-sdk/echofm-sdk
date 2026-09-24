"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchofmError = void 0;
class EchofmError extends Error {
    isEchofmError = true;
    sdk = 'Echofm';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.EchofmError = EchofmError;
//# sourceMappingURL=EchofmError.js.map