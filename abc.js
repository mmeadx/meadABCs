console.log("abc.js running");

// Click Handler for title "Let's practice our ABCs"
document.querySelector("h1").addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);

    soundOff(buttonInnerHTML);

})

// Get total length of buttons
var alphabet = document.querySelectorAll(".letter").length;

// Add letters to an object
function LetterObject(imageName, audioFile, keyboardKey) {
    this.imageName = imageName;
    this.audioFile = audioFile;
    this.keyboardKey = keyboardKey;
}

// Click Handler | add Event Listeners to each Letter button - then take small letter

for (i = 0; i < alphabet; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML[1];
        console.log(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        soundOff(buttonInnerHTML);
    })
}

// Keyboard Handler 

addEventListener("keydown", function (event) {
    let keyboardKey = event.key;
    console.log(keyboardKey);

    buttonAnimation(keyboardKey);
    soundOff(keyboardKey);

})

// Sound Function for each letter
function soundOff(key) {
    if (key == "Mead ABCs") {
        let ABCs = new Audio("https://raw.githubusercontent.com/mmeadx/meadABCs/main/sounds/ABCs.m4a");
        ABCs.play();
    } else {
        let letter = new Audio("https://raw.githubusercontent.com/mmeadx/meadABCs/main/sounds/${key}.m4a")
        letter.play();
    }
}

// This removes the text and adds a photo for 3 seconds

function buttonAnimation(currentKey) {

    console.log("button animation running on " + currentKey);

    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add(currentKey + "Pressed");

    setTimeout(function () {
        activeKey.classList.remove(currentKey + "Pressed");
    }, 3000);
}