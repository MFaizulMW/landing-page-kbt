// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Smooth appear on scroll (Intersection Observer)
const observerOpts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOpts);

const animTargets = document.querySelectorAll(
  '.problem-card, .step-content, .step-visual, ' +
  '.guide-step-card, .condition-card, .feature-card, .pricing-card'
);

animTargets.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(32px)';
  el.style.transition = `opacity .6s ease ${i * 0.05}s, transform .6s ease ${i * 0.05}s`;
  observer.observe(el);
});

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// Phone scan animation loop
(function animatePhone() {
  const fills = document.querySelectorAll('.bar-fill');
  const targets = [78, 65, 71];
  let tick = 0;
  setInterval(() => {
    tick++;
    fills.forEach((f, i) => {
      const base = targets[i];
      const jitter = (Math.random() - 0.5) * 8;
      f.style.transition = 'width 1s ease';
      f.style.width = Math.max(40, Math.min(95, base + jitter)) + '%';
    });
  }, 2200);
})();
