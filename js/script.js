"use strict"

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open');
	}

	// Перевірка на клік по посиланню всередині меню
	if (targetElement.closest('.menu') && targetElement.tagName === 'A') {
		document.body.classList.remove('menu-open');
	}
}

const icons = document.querySelectorAll('.icon-menu');
icons.forEach(icon => {
	icon.addEventListener('click', (event) => {
		icon.classList.toggle("active");
	});
});

// let arrow = document.getElementById("line");

// console.log(arrow.getTotalLength());

window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	if (window.scrollY > 50) { // Кількість пікселів, після яких змінюється фон
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});
//========================================

document.addEventListener("DOMContentLoaded", function () {
	function moveElements() {
		const screenWidth = window.innerWidth;
		const elementsToMove = document.querySelectorAll("[data-da]");

		elementsToMove.forEach(function (element) {
			const data = element.getAttribute("data-da").split(",");
			if (data.length === 3) {
				const destinationSelector = data[0].trim();
				const order = parseInt(data[1].trim());
				const requiredScreenWidth = parseInt(data[2].trim());

				const destination = document.querySelector(destinationSelector);
				if (!destination) return;

				// Збереження початкового контейнера
				if (!element.dataset.originalParent) {
					const parent = element.parentNode;
					const index = Array.from(parent.children).indexOf(element);
					element.dataset.originalParent = parent.tagName.toLowerCase() + (parent.id ? `#${parent.id}` : '') + (parent.className ? `.${parent.className.replace(/\s+/g, '.')}` : '');
					element.dataset.originalIndex = index;
				}

				if (screenWidth <= requiredScreenWidth && !element.classList.contains("moved")) {
					// Переміщення в нове місце
					if (order === 1) {
						destination.insertBefore(element, destination.firstChild);
					} else {
						const previousElement = destination.children[order - 2];
						if (previousElement) {
							destination.insertBefore(element, previousElement.nextSibling);
						} else {
							destination.appendChild(element);
						}
					}
					element.classList.add("moved");
				} else if (screenWidth > requiredScreenWidth && element.classList.contains("moved")) {
					// Повернення на початкове місце
					const originalParentSelector = element.dataset.originalParent;
					const originalIndex = parseInt(element.dataset.originalIndex, 10);
					const originalParent = document.querySelector(originalParentSelector);

					if (originalParent) {
						const children = Array.from(originalParent.children);
						if (originalIndex < children.length) {
							originalParent.insertBefore(element, children[originalIndex]);
						} else {
							originalParent.appendChild(element);
						}
						element.classList.remove("moved");
					}
				}
			}
		});
	}

	moveElements();

	window.addEventListener("resize", function () {
		moveElements();
	});
});
//========================================

const scrollButton = document.querySelector(".hero__scroll");

if (scrollButton) {
	scrollButton.addEventListener("click", () => {
		const nextSection = scrollButton.closest("section")?.nextElementSibling;
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: "smooth" });
		}
	});
}





//==================================================
// document.addEventListener("DOMContentLoaded", function () {
// 	new Swiper(".testimonials__swiper", {
// 		slidesPerView: 1,
// 		spaceBetween: 20,
// 		autoHeight:true,
// 		loop: true,
// 		autoplay: {
// 			delay: 4000,
// 			disableOnInteraction: false,
// 		},
// 		navigation: {
// 			nextEl: ".button-next",
// 			prevEl: ".button-prev",
// 		},
// 		pagination: {
// 			el: ".swiper-pagination",
// 			clickable: true,
// 		},
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				spaceBetween: 20
// 			},
// 			550: {
// 				slidesPerView: 1.3,
// 				spaceBetween: 20
// 			},
// 			768: {
// 				slidesPerView: 2,
// 				spaceBetween: 30
// 			},
// 			1024: {
// 				slidesPerView: 3,
// 				spaceBetween: 50
// 			}
// 		}
// 	});
// });

//===================================

