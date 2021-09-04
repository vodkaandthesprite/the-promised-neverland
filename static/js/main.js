const author = document.getElementById("author");
var entrance = author;
console.log(entrance);
function enter(){
    if (author.style.display === 'block') {
        author.style.display = 'none';
    } else {
        author.style.display = 'block';
    }
}
let seasons = document.getElementsByClassName("season");
for (let i = 0;seasons.length;i++) {
    seasons[i].addEventListener("click", reColor);
    function reColor() {
        seasons[i].style.backgroundColor = ("#cbc5c1");
        seasons[i].style.color = ("#524d42");
    }
}