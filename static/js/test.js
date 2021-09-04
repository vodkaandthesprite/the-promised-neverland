// let password = '';
// let rightPassword = 'qwerty';
// while (password != rightPassword){
// 	password = prompt('Введите пароль:', '');
// 	if (password == null){
// 		break;
// 	}
// }
let seasons = document.getElementsByClassName("season");
// seasons.forEach(makeActive);
for (let i = 0;seasons.length;i++) {
    seasons[i].style.backgroundColor = ("#cbc5c1");
    seasons[i].style.color = ("#524d42");
}
// function makeActive(season) {
//     season.addEventListener("click", reColor);
//     function reColor() {
//         season.style.backgroundColor = ("#cbc5c1");
//         season.style.color = ("#524d42");
//     }
// }