document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navTrigger = document.getElementById('nav-trigger');
    const navLabel = document.querySelector('label[for="nav-trigger"]');
    
    if (navTrigger && navLabel) {
      navLabel.addEventListener('click', function() {
        if (navTrigger.checked) {
          document.body.style.overflow = ''; // Reset overflow when closing
        } else {
          document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        }
      });
      
      // Close menu when clicking on a link
      document.querySelectorAll('.trigger .page-link').forEach(link => {
        link.addEventListener('click', function() {
          navTrigger.checked = false;
          document.body.style.overflow = '';
        });
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });