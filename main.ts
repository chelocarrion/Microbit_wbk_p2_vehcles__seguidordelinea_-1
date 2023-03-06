pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
while (!(input.buttonIsPressed(Button.A))) {
	
}
// - Si sensor DER i Sensor IZQ detectan negro  ( 0,0) ===> Avanza
// - Si sensor DER detecta negro y Sensor IZQ  blanco  ( 0,1) ===> Giro derecha   
// - Si sensor DER detecta Blanco y Sensor IZQ  negro  ( 1,0) ===> Giro izquierda  
// - Si sensor DER y Sensor IZQ detectan blanco  (1,1) ===>  Imposible, línea más ancha
// P1 SENSOR DER
// P2 SENSOR IZQ
// M1 motor DER
// M2 motor IZQ
// 
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        wuKong.setAllMotor(-100, -100)
        basic.showArrow(ArrowNames.North)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        wuKong.setAllMotor(-100, 0)
        basic.showArrow(ArrowNames.West)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        wuKong.setAllMotor(0, -100)
        basic.showArrow(ArrowNames.East)
    } else {
        wuKong.stopAllMotor()
        basic.showIcon(IconNames.No)
    }
})
