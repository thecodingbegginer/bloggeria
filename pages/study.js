var music = new Audio('https://mega.nz/file/ps4iRB5T#XRVJeKZfbwptvXB57-8Dgtcj1QpvOJuQD5F6uDgW5FM')
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