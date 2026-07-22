# Echofm SDK utility: make_context

from core.context import EchofmContext


def make_context_util(ctxmap, basectx):
    return EchofmContext(ctxmap, basectx)
