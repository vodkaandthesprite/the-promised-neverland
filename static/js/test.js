// function print(value) {
//     console.log(value);
//     return 0;
// }

function getAll(selector) {
    return document.querySelectorAll(selector);
}
// let seasons = getAll(".season");
// let episodes = getAll(".episode");
// const actives = getAll(".season, .episode");
getAll(".season").forEach(trigger);
function trigger(active) {
    active.addEventListener("click", reColor);
    function reColor() {
        console.log(active.srcObject);
        getAll(".season").forEach(makePassive);
        function makePassive(season) {
            season.style.backgroundColor = "#524d42";
            season.style.color = "#cbc5c1";
        }
        active.style.backgroundColor = "#cbc5c1";
        active.style.color = "#524d42";
    }
}