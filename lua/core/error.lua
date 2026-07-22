-- Echofm SDK error

local EchofmError = {}
EchofmError.__index = EchofmError


function EchofmError.new(code, msg, ctx)
  local self = setmetatable({}, EchofmError)
  self.is_sdk_error = true
  self.sdk = "Echofm"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function EchofmError:error()
  return self.msg
end


function EchofmError:__tostring()
  return self.msg
end


return EchofmError
