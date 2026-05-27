/* =====================================================
   SEO Company OC — Lightweight interactions
   ===================================================== */
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}
// Animated count-up for stats
const stats = document.querySelectorAll('.stat h3');
const animateCount = (el) => {
  const target = parseInt(el.dataset.value || el.textContent, 10);
  el.dataset.value = target;
  let current = 0;
  const step = Math.max(1, Math.floor(target / 60));
  const tick = () => {
    current += step;
    if (current >= target) {
      el.innerHTML = target + '<small>%</small>';
      return;
    }
    el.innerHTML = current + '<small>%</small>';
    requestAnimationFrame(tick);
  };
  tick();
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
stats.forEach((s) => observer.observe(s));
