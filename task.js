// //color fill
// document.getElementById("blue-container").style.background = "rgb(0,0,255)";
// document.getElementById("green-container").style.background = "rgb(0,128,0)";
// document.getElementById("red-container").style.background = "rgb(255,0,0)";

// // red
// function rtapOpen() {
//     var redHeight = document.getElementById("red-container").clientHeight;
//     document.getElementById("red-container").style.height = redHeight - 20;
//     var rgbHeight = document.getElementById("rgb-container").clientHeight;
//     document.getElementById("rgb-container").style.height = rgbHeight + 20;
//     var getColor1 = document.getElementById("red-container").style.backgroundColor;
//     document.getElementById("rgb-container").style.background = getColor1;
// }

// // green
// function gtapOpen() {
//     var greenHeight = document.getElementById("green-container").clientHeight;
//     document.getElementById("green-container").style.height = greenHeight - 20;
//     var rgbHeight = document.getElementById("rgb-container").clientHeight;
//     document.getElementById("rgb-container").style.height = rgbHeight + 20;
//     var getColor2 = document.getElementById("green-container").style.backgroundColor;
//     document.getElementById("rgb-container").style.background = getColor2;
// }

// // blue
// function btapOpen() {
//     var blueHeight = document.getElementById("blue-container").clientHeight;
//     document.getElementById("blue-container").style.height = blueHeight - 20;
//     var rgbHeight = document.getElementById("rgb-container").clientHeight;
//     document.getElementById("rgb-container").style.height = rgbHeight + 20;
//     var getColor3 = document.getElementById("blue-container").style.backgroundColor;
//     document.getElementById("rgb-container").style.background = getColor3;
// }

// Design
// 1. onClick call a function call with state (Start/ Stop) parameter.
// 2. Design a function with parameter and check its condition for next action.
// 3. design a timeout with color rato.
// 4. Color ratio logic (RGB combination)

// function fillBlue(state) {
//     if (state == "Start") {
//         setTimeout({
//             // fill blue color
//         }, 0)
//     } else if (state == "Stop") {
//         // stopFilling
//     }
// }

// function fillRed(state) {
//     if (state == "Start") {
//         setTimeout({
//             // fill blue color
//         }, 0)
//     } else if (state == "Stop") {
//         // stopFilling
//     }
// }

// function fillGree(state) {
//     if (state == "Start") {
//         setTimeout({
//             // fill blue color
//         }, 0)
//     } else if (state == "Stop") {
//         // stopFilling
//     }
// }

// function colorRatio(ratio) {
//     $('#container').css('color', rgb(ratio))
// }

document.getElementById("blue-container").style.background = "rgb(0,0,255)";
document.getElementById("green-container").style.background = "rgb(0,128,0)";
document.getElementById("red-container").style.background = "rgb(255,0,0)";

var red = 0;
var green = 0;
var blue = 0;

var timeInterval;
function redFill(state) {
    if (state == "open") {
        timeInterval = setInterval(function () {
            var redHeight = document.getElementById("red-container").clientHeight;
            document.getElementById("red-container").style.height = redHeight - 5;
            var rgbHeight = document.getElementById("rgb-container").clientHeight;
            document.getElementById("rgb-container").style.height = rgbHeight + 5;
            red = 255;
            red = red + 5;
            updateColor()
        }, 1000)
    } else if (state == "close") {
        // stopFilling
        clearInterval(timeInterval);
    }
}

function greenFill(state) {
    if (state == "open") {
        timeInterval = setInterval(function () {
            var greenHeight = document.getElementById("green-container").clientHeight;
            document.getElementById("green-container").style.height = greenHeight - 5;
            var rgbHeight = document.getElementById("rgb-container").clientHeight;
            document.getElementById("rgb-container").style.height = rgbHeight + 5;
            green = 128;
            green = green + 5;
            updateColor()
        }, 1000)
    } else if (state == "close") {
        // stopFilling
        clearInterval(timeInterval);
    }
}

function blueFill(state) {
    if (state == "open") {
        timeInterval = setInterval(function () {
            var blueHeight = document.getElementById("blue-container").clientHeight;
            document.getElementById("blue-container").style.height = blueHeight - 5;
            var rgbHeight = document.getElementById("rgb-container").clientHeight;
            document.getElementById("rgb-container").style.height = rgbHeight + 5;
            blue = 255;
            blue = blue + 5;
            updateColor()
        }, 1000)
    } else if (state == "close") {
        // stopFilling
        clearInterval(timeInterval);
    }
}

function updateColor() {
    document.getElementById("rgb-container").style.background = "rgb(" + red + "+" + green + "+" + blue + ")";
}

function reset() {
    document.getElementById("rgb-container").style.background = "rgb(" + red + "+" + green + "+" + blue + ")";
}

