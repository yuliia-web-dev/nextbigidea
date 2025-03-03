"use strict"

// document.addEventListener("click", documentActions);

// function documentActions(e) {
// 	const targetElement = e.target;

// 	if (targetElement.closest('.icon-menu')) {
// 		document.body.classList.toggle('menu-open');
// 	}

// 	// Перевірка на клік по посиланню всередині меню
// 	if (targetElement.closest('.menu') && targetElement.tagName === 'A') {
// 		document.body.classList.remove('menu-open');
// 	}
// }

// const icons = document.querySelectorAll('.icon-menu');
// icons.forEach(icon => {
// 	icon.addEventListener('click', (event) => {
// 		icon.classList.toggle("active");
// 	});
// });

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

// document.addEventListener("DOMContentLoaded", function () {
// 	function moveElements() {
// 		const screenWidth = window.innerWidth;
// 		const elementsToMove = document.querySelectorAll("[data-da]");

// 		elementsToMove.forEach(function (element) {
// 			const data = element.getAttribute("data-da").split(",");
// 			if (data.length === 3) {
// 				const destinationSelector = data[0].trim();
// 				const order = parseInt(data[1].trim());
// 				const requiredScreenWidth = parseInt(data[2].trim());

// 				const destination = document.querySelector(destinationSelector);
// 				if (!destination) return;

// 				// Збереження початкового контейнера
// 				if (!element.dataset.originalParent) {
// 					const parent = element.parentNode;
// 					const index = Array.from(parent.children).indexOf(element);
// 					element.dataset.originalParent = parent.tagName.toLowerCase() + (parent.id ? `#${parent.id}` : '') + (parent.className ? `.${parent.className.replace(/\s+/g, '.')}` : '');
// 					element.dataset.originalIndex = index;
// 				}

// 				if (screenWidth <= requiredScreenWidth && !element.classList.contains("moved")) {
// 					// Переміщення в нове місце
// 					if (order === 1) {
// 						destination.insertBefore(element, destination.firstChild);
// 					} else {
// 						const previousElement = destination.children[order - 2];
// 						if (previousElement) {
// 							destination.insertBefore(element, previousElement.nextSibling);
// 						} else {
// 							destination.appendChild(element);
// 						}
// 					}
// 					element.classList.add("moved");
// 				} else if (screenWidth > requiredScreenWidth && element.classList.contains("moved")) {
// 					// Повернення на початкове місце
// 					const originalParentSelector = element.dataset.originalParent;
// 					const originalIndex = parseInt(element.dataset.originalIndex, 10);
// 					const originalParent = document.querySelector(originalParentSelector);

// 					if (originalParent) {
// 						const children = Array.from(originalParent.children);
// 						if (originalIndex < children.length) {
// 							originalParent.insertBefore(element, children[originalIndex]);
// 						} else {
// 							originalParent.appendChild(element);
// 						}
// 						element.classList.remove("moved");
// 					}
// 				}
// 			}
// 		});
// 	}

// 	moveElements();

// 	window.addEventListener("resize", function () {
// 		moveElements();
// 	});
// });
//========================================



document.addEventListener("DOMContentLoaded", function () {
	const sidebar = document.querySelector(".sidebar");
	const openBtn = document.querySelector(".filter-icon"); // Кнопка відкриття
	const closeBtn = document.querySelector(".sidebar__close-btn"); // Кнопка закриття

	if (!sidebar || !openBtn || !closeBtn) return; // Переконуємося, що всі елементи існують

	function toggleSidebar() {
		const isVisible = sidebar.classList.toggle("visible");
		sidebar.style.pointerEvents = isVisible ? "all" : "none";
	}

	// Додаємо події до обох кнопок
	openBtn.addEventListener("click", function (event) {
		event.stopPropagation();
		toggleSidebar();
	});

	closeBtn.addEventListener("click", function (event) {
		event.stopPropagation();
		toggleSidebar();
	});

	// Закриття при кліку поза сайдбаром (на мобільних)
	document.addEventListener("click", function (event) {
		if (window.innerWidth <= 991.98 &&
			sidebar.classList.contains("visible") &&
			!sidebar.contains(event.target) &&
			!openBtn.contains(event.target)) {
			toggleSidebar();
		}
	});
});

