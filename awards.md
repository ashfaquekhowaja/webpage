---
layout: page
permalink: /awards
---

<div class="awards-hero">
  <div class="awards-hero-content">
    <h1>Awards & Scholarships</h1>
    <p>Throughout my academic journey, I have been honored with several scholarships and awards in recognition of my academic excellence and research contributions. These achievements reflect my dedication and commitment to learning, innovation, and academic success.</p>
  </div>
</div>

<div class="awards-container">
  <div class="awards-timeline">
    {% for award in site.data.awards %}
    <div class="award-card">
      <div class="award-icon">
        <i class="{{ award.icon | default: 'fas fa-trophy' }}"></i>
      </div>
      <div class="award-content">
        <div class="award-year">{{ award.year }}</div>
        <h3 class="award-title">{{ award.title }}</h3>
        <div class="award-organization">{{ award.organization }}</div>
        <p class="award-description">{{ award.description }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>