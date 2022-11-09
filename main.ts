let f = 0
input.onButtonPressed(Button.A, function () {
    f = 0
    basic.showNumber(input.temperature())
    basic.showNumber(f)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * (1.8 + 32))
})
basic.forever(function () {
	
})
