const navBar = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.mobile-nav-menu');

const openMenu = (e) => {
	e.preventDefault();
	navMenu.classList.toggle('active');
};

navBar.addEventListener('click', openMenu);

window.addEventListener('click', () => {
	if (!navMenu.classList.contains('active')) return;
	navMenu.classList.remove('active');
});

const allAccordions = document.querySelectorAll('details');

allAccordions.forEach((accordion) => {
	accordion.addEventListener('click', () => {
		if (!accordion.hasAttribute('open')) {
			accordion.classList.add('active');
			const icon = accordion.querySelector('.add-icon i');
			if (icon) {
				icon.classList.remove('fa-angle-down');
				icon.classList.add('fa-angle-up');
			}
			allAccordions.forEach((element) => {
				if (element !== accordion && element.hasAttribute('open')) {
					element.classList.remove('active');
					element.removeAttribute('open');
					const icon = element.querySelector('.add-icon i');
					if (icon) {
						icon.classList.remove('fa-angle-up');
						icon.classList.add('fa-angle-down');
					}
				}
			});
		}
	});
});
