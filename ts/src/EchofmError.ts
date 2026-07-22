
import { Context } from './Context'


class EchofmError extends Error {

  isEchofmError = true

  sdk = 'Echofm'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  EchofmError
}

