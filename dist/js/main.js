// selecting DOM items
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Setting state of menu
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show')); 
       // Set menu State
       showMenu = true;
    } else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.add('show')); 
        // Set menu State
       showMenu = false;
    }
}
