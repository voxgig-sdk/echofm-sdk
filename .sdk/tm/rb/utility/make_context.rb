# Echofm SDK utility: make_context
require_relative '../core/context'
module EchofmUtilities
  MakeContext = ->(ctxmap, basectx) {
    EchofmContext.new(ctxmap, basectx)
  }
end
