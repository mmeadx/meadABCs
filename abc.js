console.log("abc.js running");

var currentKey = "";
var soundPlaying = false;

// Click Handler for title "Let's practice our ABCs"
document.querySelector("h1").addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);

    buttonActivity(buttonInnerHTML);
})

// Get total length of buttons
var alphabet = document.querySelectorAll(".letter").length;

// Click Handler | add Event Listeners to each Letter button - then take small letter

for (let i = 0; i < alphabet; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML[1];
        console.log(buttonInnerHTML);

        buttonActivity(buttonInnerHTML);
    })
}

// Keyboard Handler 

addEventListener("keydown", function (event) {
    let keyboardKey = event.key;
    console.log(keyboardKey);

    buttonActivity(keyboardKey);
})

function buttonActivity(key) {
    if (!soundPlaying) {
        currentKey = key;
        soundPlaying = true;
        console.log(`Running buttonActivity for ${ currentKey }`)

        if (key === "Mead ABCs") {
            let ABCs = new Audio("https://raw.githubusercontent.com/mmeadx/meadABCs/main/sounds/ABCs.m4a");
            ABCs.play().then(buttonActivityComplete, buttonActivityComplete);
        } else {
            let activeKey = document.querySelector("." + currentKey);
            activeKey.classList.add(currentKey + "Pressed");
            let letter = new Audio(`https://raw.githubusercontent.com/mmeadx/meadABCs/main/sounds/${key}.m4a`)
            letter.play().then(buttonActivityComplete, buttonActivityComplete);
            ;
        }
    }
}

function buttonActivityComplete() {
    if (currentKey !== "Mead ABCs") {
        let activeKey = document.querySelector("." + currentKey);
        activeKey.classList.remove(currentKey + "Pressed")
    }
    soundPlaying = false
    currentKey = ""
}