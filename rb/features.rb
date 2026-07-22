# Echofm SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module EchofmFeatures
  def self.make_feature(name)
    case name
    when "base"
      EchofmBaseFeature.new
    when "test"
      EchofmTestFeature.new
    else
      EchofmBaseFeature.new
    end
  end
end
