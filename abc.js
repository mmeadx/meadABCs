console.log('abc2.js running');

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

letters.forEach(letter => {
    const btn = document.createElement('button');

    btn.classList.add('btn');

    btn.innerText = letter;

    btn.addEventListener('click', () => {
        stopSounds();

        btn.innerText = '';
        btn.style.backgroundImage = `url('./images/${letter}.png')`;
        btn.classList.add('letter');

        setTimeout(() => {
            btn.style.backgroundImage = 'none';
            btn.classList.remove('letter');
            btn.innerText = letter;
        }, 2500);

        document.getElementById(letter).play();
    })

    document.getElementById('buttons').appendChild(btn);
    // document.getElementById('images').appendChild(image);

})

function stopSounds() {
    letters.forEach(sound => {
        const letter = document.getElementById(sound);

        letter.pause();
        letter.currentTime = 0;
    })
}

