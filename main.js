document.addEventListener("DOMContentLoaded", function () {

	const sections = document.querySelectorAll('.section');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, { threshold: 0.15 });

	sections.forEach(section => {
		observer.observe(section);
	});

});


// ===== Language suggestion modal =====

document.addEventListener("DOMContentLoaded", function () {

	const isRuPage = document.querySelector(".lang-toggle.ru-active");
	const modal = document.getElementById("lang-modal");

	if (!isRuPage) return;
	if (sessionStorage.getItem("langPromptShown")) return;

	setTimeout(() => {
		modal.classList.add("active");
		document.body.style.overflow = "hidden";
	}, 8000);

	document.getElementById("lang-yes").addEventListener("click", function () {
		sessionStorage.setItem("langPromptShown", "yes");
		window.location.href = "/ua/";
	});

	document.getElementById("lang-no").addEventListener("click", function () {
		sessionStorage.setItem("langPromptShown", "no");
		modal.classList.remove("active");
		document.body.style.overflow = "";
	});

});

// ===== AUTO ACTIVE NAV (RU + UA PRODUCTION SAFE) =====

document.addEventListener("DOMContentLoaded", function () {

	const path = window.location.pathname;
	const isUa = path.includes("/ua/");
	const currentFile = path.split("/").pop(); // crm.html или пусто

	const navLinks = document.querySelectorAll(".nav-links a");

	navLinks.forEach(link => {

		const href = link.getAttribute("href");

		// UA главная
		if (isUa && (path === "/ua/" || path === "/ua/index.html")) {
			if (href === "/ua/") {
				link.classList.add("active");
			}
		}

		// RU главная
		if (!isUa && (path === "/" || path === "/index.html")) {
			if (href === "/") {
				link.classList.add("active");
			}
		}

		// Остальные страницы (crm, finance и т.д.)
		if (href === currentFile) {
			link.classList.add("active");
		}

	});

});