// const entrance = document.getElementById("author"); //header
// console.log(enter());
// function enter() {
//     if (entrance.style.display === 'block') {
//         entrance.style.display = 'none';
//     } else {
//         entrance.style.display = 'block';
//     }
// }
//watch page btns
function getAll(selector) {
    return document.querySelectorAll(selector);
}
const actives = getAll(".season, .episode");
actives.forEach(trigger);
function trigger(active) {
    active.addEventListener("click", reColor);
    function reColor() {
        console.log(active);
        let clickedClass = active.classList[0];
        let elements = getAll(`.${clickedClass}`);
        elements.forEach(makePassive);
        function makePassive(element) {
            element.classList.remove("active");
        }
        active.classList.add("active");
    }
}
// let seasons = document.getElementsByClassName("season");
// for (let i = 0;seasons.length;i++) {
//     seasons[i].addEventListener("click", sReColor);
//     function sReColor() {
//         seasons[i].style.backgroundColor = "#cbc5c1";
//         seasons[i].style.color = "#524d42";
//         seasons[i].addEventListener("click", activeSBtn);
//         function activeSBtn() {
//             seasons[i].style.backgroundColor = "#524d42";
//             seasons[i].style.color = "#cbc5c1";
//         }
//     }
// }
// let episodes = document.getElementsByClassName("episode");
// for (let i = 0;episodes.length;i++) {
//     episodes[i].addEventListener("click", epReColor);
//     function epReColor() {
//         episodes[i].style.backgroundColor = "#cbc5c1";
//         episodes[i].style.color = "#524d42";
//         episodes[i].addEventListener("click", activeEpBtn);
//         function activeEpBtn() {
//             episodes[i].style.backgroundColor = "#524d42";
//             episodes[i].style.color = "#cbc5c1";
//         }
//     }
// }