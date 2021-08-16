const iconMenu = document.querySelector("#icon-menu");
const mainMenu = document.querySelector("#main-menu");

export const openMenu = () => {
    iconMenu.addEventListener("click", () => mainMenu.classList.toggle("menu--show"));
};

