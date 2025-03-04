"use strict"

//======================SCROLLED HEADER================

window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	if (window.scrollY > 50) { // Кількість пікселів, після яких змінюється фон
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});



//======================SCROLL ANIMATION================

const observeElements = (selectors, options = { threshold: 0.3, unobserve: true }) => {
	const elements = document.querySelectorAll(selectors);

	if (!elements.length) return;

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				if (options.unobserve) observer.unobserve(entry.target);
			}
		});
	}, options);

	elements.forEach(el => observer.observe(el));
};

observeElements('.category__item');