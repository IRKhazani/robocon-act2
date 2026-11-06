def on_forever():
    if input.button_is_pressed(Button.AB):
        basic.show_icon(IconNames.NO)
    elif input.button_is_pressed(Button.A):
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    elif input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.NO)
    else:
        basic.show_icon(IconNames.SQUARE)
basic.forever(on_forever)
