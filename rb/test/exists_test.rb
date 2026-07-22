# Echofm SDK exists test

require "minitest/autorun"
require_relative "../Echofm_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = EchofmSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
