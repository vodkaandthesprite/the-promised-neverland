const entrance = document.getElementById("author"); //header
entrance.addEventListener("click", enter);
function enter() {
    if (entrance.style.display === 'none') {
        entrance.style.display = 'block';
    } else {
        entrance.style.display = 'none';
    }
}