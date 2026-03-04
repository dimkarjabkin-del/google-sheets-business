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

/* ===== AUTO ACTIVE NAV FINAL ===== */

document.addEventListener("DOMContentLoaded", function () {

	const currentPath = window.location.pathname
		.replace("index.html", "")
		.replace(".html", "")
		.replace(/\/$/, "");

	const navLinks = document.querySelectorAll(".nav-links a");

	navLinks.forEach(link => {

		const linkPath = new URL(link.href).pathname
			.replace("index.html", "")
			.replace(".html", "")
			.replace(/\/$/, "");

		if (currentPath === linkPath) {
			link.classList.add("active");
		}

	});

});

/* ===== TELEGRAM FOLLOW SECTIONS ===== */

document.addEventListener("DOMContentLoaded", function () {

	const tg = document.querySelector(".telegram-float");
	const sections = document.querySelectorAll(".section");

	if (!tg || sections.length === 0) return;

	function updatePosition() {

		let activeSection = sections[0];

		sections.forEach(section => {

			const rect = section.getBoundingClientRect();

			if (rect.top <= window.innerHeight * 0.5) {
				activeSection = section;
			}

		});

		const rect = activeSection.getBoundingClientRect();

		const scrollTop = window.scrollY;

		tg.style.top =
			scrollTop + rect.bottom - 80 + "px";

	}

	window.addEventListener("scroll", updatePosition);

	updatePosition();

});


/* ===== AUTO SCROLL HINT ===== */

document.addEventListener("DOMContentLoaded", function () {

	const firstSection = document.querySelector(".section");

	if (!firstSection) return;

	const hint = document.createElement("div");
	hint.className = "scroll-hint";

	hint.innerHTML = `<div class="scroll-arrow"></div>`;

	firstSection.after(hint);

});






const scrollHint = document.querySelector(".scroll-hint");

window.addEventListener("scroll", () => {

	if (window.scrollY > 120) {

		scrollHint.style.opacity = "0";

	} else {

		scrollHint.style.opacity = "1";

	}

});