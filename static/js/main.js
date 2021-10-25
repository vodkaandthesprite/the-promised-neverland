// const entrance = document.getElementById("author"); //header
// entrance.addEventListener("click", enter);
// function enter() {
//     if (entrance.style.display === 'none') {
//         entrance.style.display = 'block';
//     } else {
//         entrance.style.display = 'none';
//     }
// }

//watch page btns
function get(selector) {
    return document.querySelector(selector);
}
function getAll(selector) {
    return document.querySelectorAll(selector);
}
if (localStorage.getItem("season") === null) {
    localStorage.setItem("season", "1"); // sends a value to the local storage
    localStorage.setItem("episode", "1");
}

let defValueS = localStorage.getItem("season");
let defSeason = getAll(".season")[defValueS - 1];

let defValueEp = localStorage.getItem("episode");
let defEpisode = getAll(".episode")[defValueEp - 1];

defSeason.classList.add("active");
defEpisode.classList.add("active");

const actives = getAll(".season, .episode");
actives.forEach(trigger);
function trigger(active) {
    active.addEventListener("click", reColor);
    function reColor() {
        console.log(active);
        let clickedClass = active.classList[0];
        let clickedValue = active.textContent.slice(-2);
        if (clickedClass === "season") {
            localStorage.setItem("season", clickedValue)
            let episodes = getAll(".episode")
            episodes.forEach(makePassive);
            episodes[0].classList.add("active");
        } else {
            localStorage.setItem("episode", clickedValue)
        }
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