var music = new Audio('https://media.ashram.org/hariomaudio_satsang/Aakhir-Kab-Tak/Aakhir-Kab-Tak-1.mp3?download')
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