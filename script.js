// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});


// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thank you, ${name}! Your message has been received.`;

    contactForm.reset();

    setTimeout(() => {
        formMessage.textContent = "";
    }, 5000);
});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});