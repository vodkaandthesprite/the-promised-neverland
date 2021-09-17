// function print(value) {
//     console.log(value);
//     return 0;
// }

function getAll(selector) {
    return document.querySelectorAll(selector);
}
getAll(".season").forEach(trigger);
getAll(".episode").forEach(trigger);
function trigger(active) {
    active.addEventListener("click", reColor);
    function reColor() {
        // console.log(active.srcObject);
        getAll(".season").forEach(makePassive);
        getAll(".episode").forEach(makePassive);
        function makePassive(elements) {
            elements.style.backgroundColor = "#524d42";
            elements.style.color = "#cbc5c1";
        }
        active.style.backgroundColor = "#cbc5c1";
        active.style.color = "#524d42";
    }
}