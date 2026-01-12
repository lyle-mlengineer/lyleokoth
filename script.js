// Get references to the button and the menu
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-button");

// Add a click event listener to the menu button
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
});

// Add a click event listener to the close button
closeButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
});

// AOS animation intialization
AOS.init();

const mobileNav = document.getElementById("mobileNav");
const mobileNavList = mobileNav.querySelectorAll("li");
mobileNavList.forEach((list) => {
  list.addEventListener("click", () => {
    closeButton.click();
  })
})