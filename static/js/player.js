function get(selector) {
    return document.querySelector(selector);
} // import get from "main"
const playIcon = document.getElementById("play");
const player = get("#player");
const video = document.querySelector("video");

function getEpisode() { //index
    return parseInt(localStorage.getItem("episode"))
}
video.src = `static/vid/ep${getEpisode()}.mp4`;
// зачем это всё
// let defValueEp = localStorage.getItem("episode");
// let episodes = getAll(".episode");
// episodes.forEach();
episodes[getEpisode() - 1].addEventListener("click", () => {
    video.src = `static/vid/ep${getEpisode()}.mp4`;
})

playIcon.addEventListener("click", () => {
    playIcon.style.display = "none";
    video.style.display = "block";
});

