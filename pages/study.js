var music = new Audio('https://download2275.mediafire.com/9rdglzzjf3hg/vka6d9n5fi60hma/Website+Music.mp3')
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