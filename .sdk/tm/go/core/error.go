package core

type EchofmError struct {
	IsEchofmError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewEchofmError(code string, msg string, ctx *Context) *EchofmError {
	return &EchofmError{
		IsEchofmError: true,
		Sdk:              "Echofm",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *EchofmError) Error() string {
	return e.Msg
}
