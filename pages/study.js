var music = new Audio('https://download939.mediafire.com/rckj9dez1jfg/vka6d9n5fi60hma/Website+Music.mp3')
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