const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        menuToggle.textContent = "❌";
    } else {
        menuToggle.textContent = "☰";
    }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;