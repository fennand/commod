const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.querySelector("nav");
const menuItems = document.querySelector("ul");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  menuItems.classList.toggle("hidden");
});
