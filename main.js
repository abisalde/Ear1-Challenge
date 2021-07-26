/**======
 * ======= NAVBAR TOGGLE CODE
 */

let mainNav = document.getElementById('nav-menu');
let navBarToggle = document.getElementById('navbar-toggle-menu');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

/** ADD FLEX-DIRECTION TO NAV */

let direction = document
    .querySelector('#navbar-toggle-menu')
    .addEventListener('click', () => {
        document.querySelector('#menu').classList.toggle('new-menu');
    });

/** LET REMOVE THE EVENT LISTENER ON THE NAV */
let remove = document
    .querySelector('#navbar-toggle-menu')
    .removeEventListener('click', () => {
        document.querySelector('#menu').classList.toogle('new-menu');
    });
