var music = new Audio('https://github.com/thecodingbegginer/bloggeria/raw/main/assets/music/1.mp3')
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