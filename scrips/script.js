var menuButton = document.querySelector("header nav button");
var deNav = document.querySelector("header nav");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    deNav.classList.toggle("menuOpen");
}

var deButton = document.querySelector("button");

deButton.addEventListener("click", openMenu);

function openMenu() {
  document.body.classList.toggle("menuOpen");
}