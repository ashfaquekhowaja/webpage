---
layout: home
title: Home
---

<!-- Hero Section -->
<section class="home-hero">
  <div class="hero-background">
    <div class="hero-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </div>
  
  <div class="hero-content">
    <div class="profile-section">
      <div class="profile-image-container">
        <div class="profile-image">
          <img src="{{ 'assets/img/khowaja.jpg' | relative_url }}" alt="Ashfaque Khowaja">
        </div>
        <div class="profile-badge">
          <i class="fas fa-graduation-cap"></i>
          <span>PhD Student</span>
        </div>
      </div>
      
      <div class="hero-text">
        <h1 class="hero-title">
          {{ site.title }}
          <span id="pronounce-btn"
                role="button"
                aria-label="Hear pronunciation"
                title="Hear pronunciation">
            🔊
          </span>
        </h1>
        <p class="hero-subtitle">PhD in Intelligent Manufacturing and Robotics</p>
        <p class="hero-description">Computer Vision • Embedded Systems • Haptic Technologies</p>
        
        <div class="hero-cta">
          <a href="/about" class="btn btn-primary">
            <i class="fas fa-user"></i>
            About Me
          </a>
          <a href="/research" class="btn btn-secondary">
            <i class="fas fa-microscope"></i>
            My Research
          </a>
          <a href="{{ '/assets/CV.pdf' | relative_url }}" class="btn btn-outline">
            <i class="fas fa-download"></i>
            Resume
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <div class="scroll-arrow"></div>
    <span>Scroll to explore</span>
  </div>
</section>

<!-- About Section -->
<section class="home-about">
  <div class="container">
    <div class="about-content">
      <div class="about-text">
        <h2>Welcome to My Digital Space</h2>
        <p>Hi! I am <strong>Ashfaque Khowaja</strong>, a passionate PhD student in the <a href="https://designschool.sustech.edu.cn/" target="_blank">School of Design</a> at <a href="http://www.sustech.edu.cn/en/" target="_blank">Southern University of Science and Technology (SUSTech)</a>. My research journey focuses on the fascinating intersection of computer vision, embedded systems, and haptic technologies.</p>
        
        <p>I am currently working under the supervision of <a href="https://immersivedesignresearch.com/seungwoo" target="_blank">Prof. Seungwoo Je</a> at the <a href="https://immersivedesignresearch.com/" target="_blank">Immersive Design Group</a> at SUSTech, where I explore innovative solutions for medical image processing and human-computer interaction.</p>
        
        <div class="research-highlights">
          <div class="research-item">
            <i class="fas fa-eye"></i>
            <span>Computer Vision</span>
          </div>
          <div class="research-item">
            <i class="fas fa-microchip"></i>
            <span>Embedded Systems</span>
          </div>
          <div class="research-item">
            <i class="fas fa-hand-paper"></i>
            <span>Haptic Technologies</span>
          </div>
        </div>
      </div>
      
      <div class="social-links">
        <h3>Connect With Me</h3>
        <div class="social-grid">
          <a href="https://github.com/ashfaquekhowaja" class="social-link github" aria-label="GitHub">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ashfaquekhowaja/" class="social-link linkedin" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://www.youtube.com/@AshfaqueKhowaja" class="social-link youtube" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
            <span>YouTube</span>
          </a>
          <a href="mailto:khowaja.ashfaqali@hotmail.com" class="social-link email" aria-label="Email">
            <i class="fas fa-envelope"></i>
            <span>Email</span>
          </a>
          <a href="https://x.com/AshfaqueKhowaja" class="social-link twitter" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="https://scholar.google.com/citations?user=YOUR_PROFILE_ID" class="social-link scholar" aria-label="Google Scholar">
            <i class="fas fa-graduation-cap"></i>
            <span>Scholar</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Highlights Section -->
<section class="home-highlights">
  <div class="container">
    <h2 class="section-title">Latest Updates</h2>
    <div class="highlights-grid">
      <!-- Latest Publication -->
      <div class="highlight-card publication-card">
        <div class="card-header">
          <div class="card-icon">
            <i class="fas fa-file-alt"></i>
          </div>
          <h3>Latest Publication</h3>
        </div>
        <div class="card-content">
          {% assign latest_pub = site.data.publications | first %}
          <h4>{{ latest_pub.title }}</h4>
          <p class="journal"><em>{{ latest_pub.journal }}</em> ({{ latest_pub.year }})</p>
          <div class="pub-image">
            <img src="{{ 'assets/img/paper.webp' | relative_url }}" 
                 alt="Research Publication" 
                 class="news-thumbnail" 
                 loading="lazy">
          </div>
          <a href="{{ latest_pub.link }}" class="card-link">
            Read More <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      
      <!-- Current Project -->
      <div class="highlight-card project-card">
        <div class="card-header">
          <div class="card-icon">
            <i class="fas fa-project-diagram"></i>
          </div>
          <h3>Current Project</h3>
        </div>
        <div class="card-content">
          {% assign current_project = site.data.projects | first %}
          <h4>{{ current_project.title }}</h4>
          <p>{{ current_project.description | truncate: 100 }}</p>
          <div class="project-status">
            <span class="status-badge">{{ current_project.status }}</span>
            <span class="project-dates">{{ current_project.start_date }} - {{ current_project.end_date }}</span>
          </div>
          <a href="/projects" class="card-link">
            View Project <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      
      <!-- Recent News -->
      <div class="highlight-card news-card">
        <div class="card-header">
          <div class="card-icon">
            <i class="fas fa-newspaper"></i>
          </div>
          <h3>Recent News</h3>
        </div>
        <div class="card-content">
          {% assign research_news = site.data.news | where: "category", "Research and Academic Activities" | first %}
          {% assign latest_research = research_news.items | sort: "date" | reverse | first %}
          <h4>{{ latest_research.title }}</h4>
          <p class="news-date">{{ latest_research.date | date: "%b %d, %Y" }}</p>
          
          {% if latest_research.images.size > 0 %}
            {% assign first_image = latest_research.images | first %}
            <div class="news-image">
              <img src="{{ first_image.path | relative_url }}" 
                   alt="{{ first_image.alt }}" 
                   class="news-thumbnail"
                   loading="lazy">
            </div>
          {% endif %}
          
          <p class="news-excerpt">{{ latest_research.excerpt | truncate: 120 }}</p>
          <a href="{{ latest_research.url | default: '/news/' }}" class="card-link">
            Read More <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quick Stats Section -->
<section class="home-stats">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">3+</div>
        <div class="stat-label">Years Research</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">6</div>
        <div class="stat-label">Publications</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">2</div>
        <div class="stat-label">Projects</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">5</div>
        <div class="stat-label">Languages</div>
      </div>
    </div>
  </div>
</section>