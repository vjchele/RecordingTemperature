input.onButtonPressed(Button.A, function () {
    log += 1
})
input.onButtonPressed(Button.AB, function () {
    for (let value of list) {
        serial.writeLine("" + (value))
    }
})
let log = 0
let list: number[] = []
list = []
serial.redirectToUSB()
basic.forever(function () {
    if (log == 1) {
        list.push(input.temperature())
        basic.pause(1000)
    }
})
