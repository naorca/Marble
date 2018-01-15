const burgerbtn = document.querySelector('.burger-nav');
const burgerMenu = document.querySelector('.burger');


document.addEventListener("DOMContentLoaded", () => console.log("DOM fully loaded and parsed"));

burgerbtn.addEventListener("click", () => burgerMenu.classList.toggle('open'));
