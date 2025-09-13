---
layout: page
permalink: /news/
---

<div class="news-hero">
  <h1>News & Updates</h1>
  <p>Stay updated with my latest research activities, conference presentations, and academic journey.</p>
</div>

<!-- Category Filter -->
<div class="news-filter">
  <button class="filter-btn active" data-category="all">All News</button>
  {% for category in site.data.news %}
    <button class="filter-btn" data-category="{{ category.category | slugify }}">{{ category.category }}</button>
  {% endfor %}
</div>

<!-- News Grid -->
<div class="news-grid">
  {% for category in site.data.news %}
    {% for item in category.items %}
      <div class="news-card" data-category="{{ category.category | slugify }}" data-news="{{ forloop.index0 }}">
        <div class="news-card-inner">
          <div class="news-image">
            {% if item.images.size > 0 %}
              {% if item.images[0].path contains 'assets/img/' %}
                <img src="/{{ item.images[0].path }}" alt="{{ item.images[0].alt }}" loading="lazy">
              {% else %}
                <img src="{{ item.images[0].path | relative_url }}" alt="{{ item.images[0].alt }}" loading="lazy">
              {% endif %}
            {% else %}
              <div class="news-placeholder">
                <i class="fas fa-newspaper"></i>
              </div>
            {% endif %}
            <div class="news-overlay">
              <div class="news-category-badge">{{ category.category }}</div>
              <div class="news-actions">
                <button class="btn-view-news" onclick="openNewsModal('{{ category.category | slugify }}', {{ forloop.index0 }})">
                  <i class="fas fa-eye"></i> Read More
                </button>
              </div>
            </div>
          </div>
          <div class="news-content">
            <h3>{{ item.title }}</h3>
            <p class="news-date">{{ item.date | date: "%B %d, %Y" }}</p>
            <p class="news-excerpt">{{ item.excerpt | strip_html | truncate: 120 }}</p>
            <div class="news-meta">
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  {% endfor %}
</div>

<!-- News Detail Modal -->
<div id="newsModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeNewsModal()">&times;</span>
    <div id="newsModalContent">
      <!-- Content will be populated by JavaScript -->
    </div>
  </div>
</div>

<script>
// News data for JavaScript
const newsData = {{ site.data.news | jsonify }};

// Flatten news data for easier access
const allNews = [];
newsData.forEach(category => {
  category.items.forEach((item, index) => {
    allNews.push({
      ...item,
      category: category.category,
      categorySlug: category.category.toLowerCase().replace(/\s+/g, '-')
    });
  });
});

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter news cards
      newsCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

function openNewsModal(categorySlug, itemIndex) {
  const category = newsData.find(cat => cat.category.toLowerCase().replace(/\s+/g, '-') === categorySlug);
  const item = category.items[itemIndex];
  const modal = document.getElementById('newsModal');
  const modalContent = document.getElementById('newsModalContent');
  
  modalContent.innerHTML = `
    <div class="news-detail">
      <div class="news-detail-header">
        <div class="news-detail-image">
          ${item.images && item.images.length > 0 ? 
            `<img src="${item.images[0].path.includes('assets/img/') ? '/' + item.images[0].path : item.images[0].path}" alt="${item.images[0].alt}">` : 
            `<div class="news-placeholder"><i class="fas fa-newspaper"></i></div>`
          }
        </div>
        <div class="news-detail-info">
          <h1>${item.title}</h1>
          <p class="news-category">${category.category}</p>
          <p class="news-date">${new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
      
      <div class="news-detail-content">
        <div class="news-description">
          <h3>About This Event</h3>
          <div class="news-text">${item.excerpt}</div>
        </div>
        
        ${item.images && item.images.length > 0 ? `
        <div class="news-gallery-section">
          <h3>Event Gallery</h3>
          <div class="gallery-grid">
            ${item.images.map(img => `
              <div class="gallery-item">
                <img src="${img.path.includes('assets/img/') ? '/' + img.path : img.path}" alt="${img.alt}" loading="lazy">
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeNewsModal() {
  const modal = document.getElementById('newsModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('newsModal');
  if (event.target == modal) {
    closeNewsModal();
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeNewsModal();
  }
});
</script>