var music = new Audio('https://download939.mediafire.com/t2e3fx0utodg/44jo88rjsq3o4rr/Website+Music.mp3')
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