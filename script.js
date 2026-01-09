/* SCROLL ANIMATION */
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fades.forEach(el => observer.observe(el));

/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("light") ? "☀️" : "🌙";
});