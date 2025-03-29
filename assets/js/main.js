// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.theme-toggle');
    const htmlEl = document.documentElement;
    
    // Initialize theme
    function initTheme() {
      // Check localStorage first, then system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      htmlEl.setAttribute('data-theme', initialTheme);
      updateButtonText(initialTheme);
    }
    
    // Toggle theme
    function toggleTheme() {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateButtonText(newTheme);
    }
    
    // Update button text
    function updateButtonText(theme) {
      if (toggleBtn) {
        toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
    }
    
    // Initialize
    initTheme();
    
    // Add event listener
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  });


  // Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navbarMenu.classList.toggle('active');
      this.setAttribute('aria-expanded', this.classList.contains('active'));
    });
    
    // Close menu when clicking on links (optional)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  });
