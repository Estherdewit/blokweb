var menuButton = document.querySelector("header nav button");
var deNav = document.querySelector("header nav");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    deNav.classList.toggle("menuOpen");
}