// Theme toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.theme-toggle');
  const htmlEl = document.documentElement;

  function readSavedTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  function saveTheme(theme) {
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  function updateButton(theme) {
    if (!toggleBtn) return;
    toggleBtn.innerHTML = theme === 'dark'
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
    toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = readSavedTheme() || (systemPrefersDark ? 'dark' : 'light');
  htmlEl.setAttribute('data-theme', initialTheme);
  updateButton(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      saveTheme(newTheme);
      updateButton(newTheme);
    });
  }
});


// Hamburger menu
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbarMenu = document.querySelector('.navbar-menu');
  if (!hamburger || !navbarMenu) return;

  function setMenu(open) {
    hamburger.classList.toggle('active', open);
    navbarMenu.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
  }

  hamburger.addEventListener('click', function(event) {
    event.stopPropagation();
    setMenu(!navbarMenu.classList.contains('active'));
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('click', function(event) {
    if (navbarMenu.classList.contains('active') && !navbarMenu.contains(event.target)) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 960) setMenu(false);
  });
});


// Header shadow once the page is scrolled
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});


// Reveal cards and sections as they scroll into view
document.addEventListener('DOMContentLoaded', function() {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll([
    '.highlight-card', '.stat-item', '.home-about .about-text', '.home-about .social-links',
    '.about-section', '.award-card', '.publication-card', '.project-card', '.news-card',
    '.contact-card', '.contact-form-section'
  ].join(','));

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

  targets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});


// Name pronunciation
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('pronounce-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const utter = new SpeechSynthesisUtterance('Ashfaq Khawaja');
    window.speechSynthesis.speak(utter);
  });
});
