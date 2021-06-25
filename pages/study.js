var music = new Audio('..\assets\music\music.mp3');

function play() {
    music.play();
    music.muted = false;
    let disc = document.getElementById('dj')
    disc.style.animationName = ('spinner');
}
function pause() {
    music.pause();
    let disc = document.getElementById('dj')
    disc.style.animationName = ('');
}