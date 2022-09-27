const navButton = document.querySelector(".nav-button")
const navMenu = document.querySelector(".nav-menu")

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");

    if (navMenu.classList.contains("nav-menu-visible")) {
        navButton.setAttribute("aria-label", "Cerrar menu");
    } else {
        navButton.setAttribute("aria-label", "Abrir menu");
    }
});