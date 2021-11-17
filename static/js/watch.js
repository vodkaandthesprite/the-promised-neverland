function get(selector) {
    return document.querySelector(selector);
}
function getAll(selector) {
    return document.querySelectorAll(selector);
}
if (localStorage["season"] === undefined) {
    localStorage.setItem("season", "1"); // sends a value to the local storage
    localStorage.setItem("episode", "1");
}

let defValueS = localStorage.getItem("season");
let defSeason = getAll(".season")[defValueS - 1];

let defValueEp = localStorage.getItem("episode"); //index
let defEpisode = getAll(".episode")[defValueEp - 1];

defSeason.classList.add("active");
defEpisode.classList.add("active");

const playIcon = document.getElementById("play");
const player = get("#player");
const video = document.querySelector("video");

const actives = getAll(".season, .episode");
let episodes = getAll(".episode");
if (defValueEp > 1) {
    episodes[0].classList.remove("active");
}
actives.forEach(trigger);
function trigger(active) {
    active.addEventListener("click", activate);
    function activate() {
        console.log(active);
        let clickedClass = active.classList[0];
        let clickedValue = active.textContent.slice(-2);

        function getEpisode() { //index
            return parseInt(localStorage.getItem("episode"))
        }

        video.src = `static/vid/ep${getEpisode()}.mp4`;
        if (clickedClass === "season") {
            localStorage.setItem("season", clickedValue)
            localStorage.setItem("episode", "1")

            episodes.forEach(makePassive);
            episodes[0].classList.add("active");
            episodes[getEpisode() - 1].addEventListener("click", () => {
                video.src = `static/vid/ep${getEpisode()}.mp4`;
            })
        } else {
            localStorage.setItem("episode", clickedValue);
        }
        playIcon.addEventListener("click", () => {
            playIcon.style.display = "none";
            video.style.display = "block";
        });
        let elements = getAll(`.${clickedClass}`);
        elements.forEach(makePassive);
        function makePassive(element) {
            element.classList.remove("active");
        }
        active.classList.add("active");
    }
}