# Echofm SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module EchofmFeatures
  def self.make_feature(name)
    case name
    when "base"
      EchofmBaseFeature.new
    when "ratelimit"
      EchofmRatelimitFeature.new
    when "retry"
      EchofmRetryFeature.new
    when "test"
      EchofmTestFeature.new
    when "timeout"
      EchofmTimeoutFeature.new
    else
      EchofmBaseFeature.new
    end
  end
end
