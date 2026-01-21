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

const timeSnapURL = "https://timesnap-b9t1.onrender.com/health"
const savannaURL = "https://savannafaces.onrender.com/health"

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    console.log('DOM has loaded!');
    fetch(timeSnapURL)
        .then(response => response.text())
        .then(data => {
          console.log("TimeSnap", data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    fetch(savannaURL)
        .then(response => response.text())
        .then(data => {
          console.log("Savanna", data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
});