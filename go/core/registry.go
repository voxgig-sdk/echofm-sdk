package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPostEntityFunc func(client *EchofmSDK, entopts map[string]any) EchofmEntity

