/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Apr 2026
 * This program recieves radio messages
*/

// setup
radio.setGroup(153)
basic.showIcon(IconNames.Happy)

// receive radio message
radio.onReceivedString(function (receivedString) {
    // display radio messages
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})