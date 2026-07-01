document.getElementById("year")?.replaceChildren(new Date().getFullYear());

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => observer.observe(el));
