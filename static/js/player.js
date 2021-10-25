function get(selector) {
    return document.querySelector(selector);
} // import get from "main"
const playIcon = document.getElementById("play");
const player = get("#player");
//зачем это всё
playIcon.addEventListener("click", trigger);
function trigger() {
    playIcon.style.display = "none";

}
// playIcon.addEventListener("click", () => {
//
// })