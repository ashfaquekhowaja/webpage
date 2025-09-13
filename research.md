---
layout: page
permalink: /research
---

<div class="research-hero">
  <h1>Research Interest</h1>
  <p>My broad research interests lie in computer vision, embedded systems, and haptic technologies, with a focus on developing innovative solutions for medical image processing, human-computer interaction, and intelligent sensing systems. I am particularly interested in exploring deep learning-based computer vision applications, real-time embedded AI systems, and haptic feedback mechanisms to enhance user experiences in healthcare, virtual reality, and robotics.</p>
</div>

<!-- Publications Section -->
<div class="publications-section">
  <div class="container">
    <h2>Publications</h2>
    
    <!-- Filter Buttons -->
    <div class="publication-filter">
      <button class="filter-btn active" data-type="all">All Publications</button>
      <button class="filter-btn" data-type="journal">Journal Articles</button>
      <button class="filter-btn" data-type="conference">Conference Papers</button>
    </div>

    <!-- Journal Articles -->
    <div class="publication-category">
      <h3 class="category-title">
        <i class="fas fa-book"></i>
        Journal Articles
        <span class="count">({% assign journal_count = 0 %}{% for pub in site.data.publications %}{% if pub.journal %}{% assign journal_count = journal_count | plus: 1 %}{% endif %}{% endfor %}{{ journal_count }})</span>
      </h3>
      <div class="publications-grid">
        {% assign journal_count = 1 %}
        {% for pub in site.data.publications %}
          {% if pub.journal %}
            <div class="publication-card" data-type="journal">
              <div class="publication-header">
                <div class="publication-number">{{ journal_count }}</div>
                <div class="publication-type">
                  <i class="fas fa-book"></i>
                  Journal
                </div>
              </div>
              <div class="publication-content">
                <h4>{{ pub.title }}</h4>
                <p class="authors">{{ pub.authors }}</p>
                <p class="venue"><em>{{ pub.journal }}</em>, {{ pub.year }}</p>
                <div class="publication-actions">
                  {% if pub.link %}
                    <a href="{{ pub.link }}" class="btn-publication" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                      View Publication
                    </a>
                  {% endif %}
                </div>
              </div>
            </div>
            {% assign journal_count = journal_count | plus: 1 %}
          {% endif %}
        {% endfor %}
      </div>
    </div>

    <!-- Conference Papers -->
    <div class="publication-category">
      <h3 class="category-title">
        <i class="fas fa-users"></i>
        Conference Papers
        <span class="count">({% assign conference_count = 0 %}{% for pub in site.data.publications %}{% if pub.conference %}{% assign conference_count = conference_count | plus: 1 %}{% endif %}{% endfor %}{{ conference_count }})</span>
      </h3>
      <div class="publications-grid">
        {% assign conference_count = 1 %}
        {% for pub in site.data.publications %}
          {% if pub.conference %}
            <div class="publication-card" data-type="conference">
              <div class="publication-header">
                <div class="publication-number">{{ conference_count }}</div>
                <div class="publication-type">
                  <i class="fas fa-users"></i>
                  Conference
                </div>
              </div>
              <div class="publication-content">
                <h4>{{ pub.title }}</h4>
                <p class="authors">{{ pub.authors }}</p>
                <p class="venue"><em>{{ pub.conference }}</em>, {{ pub.year }}</p>
                <div class="publication-actions">
                  {% if pub.link %}
                    <a href="{{ pub.link }}" class="btn-publication" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                      View Publication
                    </a>
                  {% endif %}
                </div>
              </div>
            </div>
            {% assign conference_count = conference_count | plus: 1 %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>

<script>
// Publication filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.publication-filter .filter-btn');
  const publicationCards = document.querySelectorAll('.publication-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const type = this.getAttribute('data-type');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter publication cards
      publicationCards.forEach(card => {
        if (type === 'all' || card.getAttribute('data-type') === type) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
</script>