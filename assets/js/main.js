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


// Scroll progress bar
document.addEventListener('DOMContentLoaded', function() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
    ticking = false;
  }

  update();
  window.addEventListener('scroll', function() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener('resize', update);
});


// Count up the home page stats when they scroll into view
document.addEventListener('DOMContentLoaded', function() {
  const numbers = document.querySelectorAll('.stat-number');
  if (!numbers.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Small numbers would finish in a blink, so tick through each value at a steady pace
  function countUp(el, delay) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix;
    const stepTime = Math.max(1400 / Math.max(target, 1), 120);
    let current = 0;

    el.textContent = '0' + suffix;
    setTimeout(function tick() {
      current += 1;
      el.textContent = current + suffix;
      if (current < target) {
        setTimeout(tick, stepTime);
      } else {
        el.classList.add('counted');
      }
    }, delay);
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.prototype.indexOf.call(numbers, entry.target);
        countUp(entry.target, 500 + index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  numbers.forEach(el => {
    const match = el.textContent.trim().match(/^(\d+)(.*)$/);
    if (!match) return;
    el.dataset.target = match[1];
    el.dataset.suffix = match[2];
    // Show 0 until the stats scroll into view
    el.textContent = '0' + match[2];
    observer.observe(el);
  });
});


// Soft spotlight that follows the cursor across cards
document.addEventListener('DOMContentLoaded', function() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  const cards = document.querySelectorAll([
    '.highlight-card', '.award-card', '.publication-card', '.project-card-inner', '.news-card-inner',
    '.about-section', '.contact-card', '.contact-form-section', '.experience-card', '.skill-category',
    '.home-about .about-text', '.home-about .social-links'
  ].join(','));

  cards.forEach(card => {
    card.classList.add('spotlight');
    card.addEventListener('pointermove', function(event) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (event.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (event.clientY - rect.top) + 'px');
    });
    card.addEventListener('pointerleave', function() {
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
  });
});


// Neural network animation behind the home hero
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.querySelector('.hero-network');
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext('2d');
  const hero = canvas.closest('.home-hero') || canvas.parentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const linkDistance = 140;
  const mouseRange = 180;
  const mouse = { x: -9999, y: -9999 };
  let nodes = [];
  let width = 0;
  let height = 0;
  let color = '47, 75, 216';
  let running = false;
  let visible = true;
  let frameId = null;

  function readColor() {
    const value = getComputedStyle(document.documentElement).getPropertyValue('--network').trim();
    if (value) color = value;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(Math.round((width * height) / 15000), 90);
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 1.2
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < linkDistance) {
          ctx.strokeStyle = 'rgba(' + color + ',' + (0.22 * (1 - dist / linkDistance)) + ')';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      const mdist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (mdist < mouseRange) {
        ctx.strokeStyle = 'rgba(' + color + ',' + (0.45 * (1 - mdist / mouseRange)) + ')';
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      ctx.fillStyle = 'rgba(' + color + ',0.55)';
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function step() {
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      // Gentle pull toward the cursor
      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      const dist = Math.hypot(dx, dy);
      if (dist < mouseRange && dist > 0) {
        n.x += (dx / dist) * 0.25;
        n.y += (dy / dist) * 0.25;
      }
    });
    draw();
    frameId = requestAnimationFrame(step);
  }

  function start() {
    if (running || reduceMotion) return;
    running = true;
    frameId = requestAnimationFrame(step);
  }

  function stop() {
    running = false;
    if (frameId) cancelAnimationFrame(frameId);
  }

  readColor();
  resize();
  draw();
  start();

  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      resize();
      draw();
    }, 150);
  });

  hero.addEventListener('pointermove', function(event) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  });

  hero.addEventListener('pointerleave', function() {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Pause when the hero is off screen or the tab is hidden
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function(entries) {
      visible = entries[0].isIntersecting;
      if (visible && !document.hidden) start(); else stop();
    }).observe(hero);
  }

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) stop(); else if (visible) start();
  });

  // Follow the light/dark theme
  new MutationObserver(function() {
    readColor();
    if (!running) draw();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
});
