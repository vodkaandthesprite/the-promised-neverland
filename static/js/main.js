const auto = document.getElementById("author");
var entrance = auto.style;
console.log(entrance);
function enter(){
    if (auto.style.display === 'block') {
        auto.style.display = 'none';
    } else {
        auto.style.display = 'block';
    }
}
const el1 = document.getElementsByClassName("season");
var season1 = el1[0].style;
console.log(season1);
function s1(){
    season1.backgroundColor = ("#cbc5c1");
    season1.color = ("#524d42");
}
const el2 = document.getElementsByClassName("season");
var season2 = el2[1].style;
console.log(season2);
function s2(){
    season2.backgroundColor = ("#cbc5c1");
    season2.color = ("#524d42");
}
const el3 = document.getElementsByClassName("season");
var season3 = el3[2].style;
console.log(season3);
function s3(){
    season3.backgroundColor = ("#cbc5c1");
    season3.color = ("#524d42");
}