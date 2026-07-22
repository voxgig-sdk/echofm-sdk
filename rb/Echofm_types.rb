# frozen_string_literal: true

# Typed models for the Echofm SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Post entity data model.
#
# @!attribute [rw] post_id
#   @return [Integer, nil]
#
# @!attribute [rw] view
#   @return [Integer, nil]
Post = Struct.new(
  :post_id,
  :view,
  keyword_init: true
)

# Request payload for Post#load.
#
# @!attribute [rw] post_id
#   @return [Integer]
PostLoadMatch = Struct.new(
  :post_id,
  keyword_init: true
)

