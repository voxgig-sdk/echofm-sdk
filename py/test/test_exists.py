# ProjectName SDK exists test

import pytest
from echofm_sdk import EchofmSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = EchofmSDK.test(None, None)
        assert testsdk is not None
