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
    var keyboardKey = event.key;
    console.log(keyboardKey);

    buttonAnimation(keyboardKey);
    soundOff(keyboardKey);

})

// Sound Function for each letter
function soundOff(key) {

    switch (key) {
        case "a":
            var letterA = new Audio("/sounds/a.m4a");
            letterA.play();
            break;

        case "b":
            var letterB = new Audio("/sounds/b.m4a");
            letterB.play();
            break;

        case "c":
            var letterC = new Audio("/sounds/c.m4a");
            letterC.play();
            break;

        case "d":
            var letterD = new Audio("/sounds/d.m4a");
            letterD.play();
            break;

        case "e":
            var letterE = new Audio("/sounds/e.m4a");
            letterE.play();
            break;

        case "f":
            var letterF = new Audio("/sounds/f.m4a");
            letterF.play();
            break;

        case "g":
            var letterG = new Audio("/sounds/g.m4a");
            letterG.play();
            break;

        case "h":
            var letterH = new Audio("/sounds/h.m4a");
            letterH.play();
            break;

        case "i":
            var letterI = new Audio("/sounds/i.m4a");
            letterI.play();
            break;

        case "j":
            var letterJ = new Audio("/sounds/j.m4a");
            letterJ.play();
            break;

        case "k":
            var letterK = new Audio("/sounds/k.m4a");
            letterK.play();
            break;

        case "l":
            var letterL = new Audio("/sounds/l.m4a");
            letterL.play();
            break;

        case "m":
            var letterM = new Audio("/sounds/m.m4a");
            letterM.play();
            break;

        case "n":
            var letterN = new Audio("/sounds/n.m4a");
            letterN.play();
            break;

        case "o":
            var letterO = new Audio("/sounds/o.m4a");
            letterO.play();
            break;

        case "p":
            var letterP = new Audio("/sounds/p.m4a");
            letterP.play();
            break;

        case "q":
            var letterQ = new Audio("/sounds/q.m4a");
            letterQ.play();
            break;

        case "r":
            var letterR = new Audio("/sounds/r.m4a");
            letterR.play();
            break;

        case "s":
            var letterS = new Audio("/sounds/s.m4a");
            letterS.play();
            break;

        case "t":
            var letterT = new Audio("/sounds/t.m4a");
            letterT.play();
            break;

        case "u":
            var letterU = new Audio("/sounds/u.m4a");
            letterU.play();
            break;

        case "v":
            var letterV = new Audio("/sounds/v.m4a");
            letterV.play();
            break;

        case "w":
            var letterW = new Audio("/sounds/w.m4a");
            letterW.play();
            break;

        case "x":
            var letterX = new Audio("/sounds/x.m4a");
            letterX.play();
            break;

        case "y":
            var letterY = new Audio("/sounds/y.m4a");
            letterY.play();
            break;

        case "z":
            var letterZ = new Audio("/sounds/z.m4a");
            letterZ.play();
            break;
        
        case "Mead ABCs":
            var ABCs = new Audio("/sounds/ABCs.m4a");
            ABCs.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
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