const body = document.body;
const btn = document.getElementById('menuBtn');
const scrim = document.getElementById('scrim');
if (btn) btn.addEventListener('click', () => body.classList.toggle('nav-open'));
if (scrim) scrim.addEventListener('click', () => body.classList.remove('nav-open'));
document.querySelectorAll('.nav a').forEach(a =>
  a.addEventListener('click', () => body.classList.remove('nav-open'))
);

const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
if (links.length) {
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const link = map.get(e.target.id);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  document.querySelectorAll('section[id]').forEach(s => spy.observe(s));
}
