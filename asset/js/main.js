const navBar = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.mobile-nav-menu');

const openMenu = (e) => {
    e.preventDefault();
    console.log('I am clicked');
    navMenu.classList.toggle('active');
};

navBar.addEventListener('click', openMenu);

window.addEventListener('click', () => {
    if (!navMenu.classList.contains('active')) return;
    navMenu.classList.remove('active');
});
