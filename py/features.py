# Echofm SDK feature factory

from feature.base_feature import EchofmBaseFeature
from feature.test_feature import EchofmTestFeature


def _make_feature(name):
    features = {
        "base": lambda: EchofmBaseFeature(),
        "test": lambda: EchofmTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
