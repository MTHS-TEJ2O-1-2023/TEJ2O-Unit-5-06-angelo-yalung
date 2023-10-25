/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program tells the user the distance between the microbit and the corner of the room using a sonar
*/

// variables
let distanceToObject: number = 0

// starting
basic.showIcon(IconNames.Happy)

// finding the distance
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  basic.showNumber(distanceToObject)
  basic.showIcon(IconNames.Happy)
})
