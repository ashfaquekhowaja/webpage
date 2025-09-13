---
layout: page
title: 
permalink: /projects/
---

<div class="projects-hero">
  <h1>Projects</h1>
  <p>Explore my portfolio of innovative projects spanning robotics, product design, and technology solutions.</p>
</div>

<div class="projects-grid">
  {% for project in site.data.projects %}
    <div class="project-card" data-project="{{ forloop.index0 }}">
      <div class="project-card-inner">
        <div class="project-image">
          {% if project.cover_image %}
            {% if project.cover_image contains '/assets/img/' %}
              <img src="{{ project.cover_image }}" alt="{{ project.title }}" loading="lazy">
            {% else %}
              <img src="/assets/img/{{ project.cover_image }}" alt="{{ project.title }}" loading="lazy">
            {% endif %}
          {% else %}
            <div class="project-placeholder">
              <i class="fas fa-project-diagram"></i>
            </div>
          {% endif %}
          <div class="project-overlay">
            <div class="project-tags">
              {% for tag in project.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
            <div class="project-actions">
              <button class="btn-view" onclick="openProjectModal({{ forloop.index0 }})">
                <i class="fas fa-eye"></i> View Details
              </button>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-category">{{ project.category }}</p>
          <p class="project-description">{{ project.description | truncate: 120 }}</p>
          <div class="project-meta">
            <span class="project-dates">{{ project.start_date }} - {{ project.end_date }}</span>
            <span class="project-status status-{{ project.status | downcase }}">{{ project.status }}</span>
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<!-- Project Detail Modal -->
<div id="projectModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeProjectModal()">&times;</span>
    <div id="modalContent">
      <!-- Content will be populated by JavaScript -->
    </div>
  </div>
</div>

<script>
// Project data for JavaScript
const projects = {{ site.data.projects | jsonify }};

function openProjectModal(projectIndex) {
  const project = projects[projectIndex];
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  
  modalContent.innerHTML = `
    <div class="project-detail">
      <div class="project-detail-header">
        <div class="project-detail-image">
          ${project.cover_image ? 
            `<img src="${project.cover_image.includes('/assets/img/') ? project.cover_image : '/assets/img/' + project.cover_image}" alt="${project.title}">` : 
            `<div class="project-placeholder"><i class="fas fa-project-diagram"></i></div>`
          }
        </div>
        <div class="project-detail-info">
          <h1>${project.title}</h1>
          <p class="project-category">${project.category}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-meta">
            <span class="project-dates">${project.start_date} - ${project.end_date}</span>
            <span class="project-status status-${project.status.toLowerCase()}">${project.status}</span>
          </div>
        </div>
      </div>
      
      <div class="project-detail-content">
        <div class="project-description">
          <h3>About This Project</h3>
          <p>${project.description}</p>
        </div>
        
        ${project.technologies ? `
        <div class="project-technologies">
          <h3>Technologies Used</h3>
          <div class="tech-tags">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
        ` : ''}
        
        ${project.team_members ? `
        <div class="project-team">
          <h3>Team Members</h3>
          <ul class="team-list">
            ${project.team_members.map(member => `<li>${member}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        
        ${project.images && project.images.length > 0 ? `
        <div class="project-gallery">
          <h3>Project Gallery</h3>
          <div class="gallery-grid">
            ${project.images.map(img => `
              <div class="gallery-item">
                <img src="${img.includes('/assets/img/') ? img : '/assets/img/' + img}" alt="${project.title} image" loading="lazy">
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
        
        ${project.video ? `
        <div class="project-video-section">
          <h3>Project Video</h3>
          ${project.video.includes('youtube.com') || project.video.includes('youtu.be') ? 
            `<div class="video-container">
              <iframe src="${project.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>` :
            `<video controls class="project-video">
              <source src="/assets/Video/${project.video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>`
          }
          ${project.video_caption ? `<p class="video-caption">${project.video_caption}</p>` : ''}
        </div>
        ` : ''}
        
        ${project.github ? `
        <div class="project-links">
          <a href="https://github.com/${project.github}" class="btn-github" target="_blank">
            <i class="fab fa-github"></i> View on GitHub
          </a>
        </div>
        ` : ''}
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target == modal) {
    closeProjectModal();
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeProjectModal();
  }
});
</script>

