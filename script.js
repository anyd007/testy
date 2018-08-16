const video = document.getElementById("myVideo");
const goo = document.getElementById("grot")
function myFunc() {
    if (video.paused){
        video.play();
        goo.innerHTML = "STOP"
    }
    else {
        video.pause();
        goo.innerHTML = "START"
    }
}