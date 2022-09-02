const changeNavbar = () => {
    const navBar = document.querySelector('.header');
    const navMenu = document.querySelector('.nav-menu');
    let scrollValue = window.scrollY;
    scrollValue > 600 ? (navBar.classList.add('navBg'), navMenu.classList.add('navMenu')) : (navBar.classList.remove('navBg'), navMenu.classList.remove('navMenu'))
}

window.addEventListener('scroll', changeNavbar);