// Hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navi = document.getElementById("hamburger-nav");
const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");
const bkgMask = document.getElementById("mask");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navi.classList.toggle("active");
  bkgMask.classList.toggle("active")
});

bkgMask.addEventListener("click", function() {
  hamburgerMenu.classList.remove("active");
  navi.classList.remove("active");
  bkgMask.classList.remove("active")
})