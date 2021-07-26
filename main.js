/**======
 * ======= NAVBAR TOGGLE CODE
 */

let mainNav = document.getElementById("nav-menu");
let navBarToggle = document.getElementById("navbar-toggle-menu");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});

/** ADD FLEX-DIRECTION TO NAV */

let direction = document.querySelector('#navbar-toggle-menu').addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('new-menu');
});

/** LET REMOVE THE EVENT LISTENER ON THE NAV */
let remove = document.querySelector('#navbar-toggle-menu').removeEventListener('click', () => {
    document.querySelector('#menu').classList.toogle('new-menu');
});


/*===========
*============ FAQS ACCORDION
*/

// const enableAccordion = (elem) => {
//     const panelClick = (e) => {
//         displayPanel(e.currenTarget);
//     }

//     const displayPanel = (p) => {
//         var exPanel = elem.querySelector('.active')
//     if (exPanel) {
//     exPanel.classList.remove('active');
//     }
//     p.classList.add("active");
//     }
//     let allAccordion = elem.querySelectorAll('.accordion-main');
//     for (let i = 0; i < allAccordion.length; i++ ) {
//     allAccordion[i].addEventListener('click', panelClick);
//     }
//     displayPanel(allAccordion[0]);
// }
// enableAccordion(document.getElementById('faqs-accordion'));


$("input").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});