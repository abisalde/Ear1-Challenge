/**======
 * ======= NAVBAR TOGGLE CODE
 */

const mainNav = document.getElementById('nav-menu');
const navBarToggle = document.getElementById('navbar-toggle-menu');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

/** ADD FLEX-DIRECTION TO NAV */

const direction = document
    .querySelector('#navbar-toggle-menu')
    .addEventListener('click', () => {
        document.querySelector('#menu').classList.toggle('new-menu');
    });

/** LET REMOVE THE EVENT LISTENER ON THE NAV */
const remove = document
    .querySelector('#navbar-toggle-menu')
    .removeEventListener('click', () => {
        document.querySelector('#menu').classList.toogle('new-menu');
    });
