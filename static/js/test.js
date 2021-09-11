// function print(value) {
//     console.log(value);
//     return 0;
// }

let seasons = document.querySelectorAll(".season");
let episodes = document.querySelectorAll(".episode");
const actives = document.querySelectorAll(".season, .episode");
actives.forEach(trigger);
function trigger(active) {
    active.addEventListener("click", reColor);
    function reColor() {
        active.style.backgroundColor = "#cbc5c1";
        active.style.color = "#524d42";
    }
}