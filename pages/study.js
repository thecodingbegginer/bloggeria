var music = new Audio('https://www.mediafire.com/file/0oiyila3x1w9021/mixkit-raising-me-higher-34.mp3/file')
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
