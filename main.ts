basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.No)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
