const navLogoContent = document.querySelector(".nav-logo-content");
const navHamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelectorAll(".navbar-links");


navHamburger.addEventListener("click", () => {

    navbarLinks.forEach((link) => {
        link.classList.toggle("active");
    });
});