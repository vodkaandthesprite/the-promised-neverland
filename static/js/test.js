var seasons = document.getElementsByClassName("season");
// seasons.forEach(makeActive);
for (let i = 0;seasons.length;i++) {
    seasons[i].addEventListener("click", reColor);
    function reColor() {
        seasons[i].style.backgroundColor = ("#cbc5c1");
        seasons[i].style.color = ("#524d42");
    }
}