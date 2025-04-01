---
layout: page
title: Projects
permalink: /projects/
---

<div class="projects-container">
  {% for project in site.data.projects %}
    <div class="project-box">
      <h3>{{ project.title }}</h3>
      <p class="project-meta">
        <span class="project-dates">{{ project.start_date }} - {{ project.end_date }}</span> | 
        <span class="project-status">{{ project.status }}</span>
      </p>
      <p>{{ project.description }}</p>
      {% if project.technologies %}
        <p><strong>Technologies:</strong> {{ project.technologies }}</p>
      {% endif %}
      {% if project.github %}
        <a href="https://github.com/{{ project.github }}" class="button">View on GitHub</a>
      {% endif %}
      {% if project.image %}
        <img src="/assets/images/{{ project.image }}" alt="{{ project.title }}" class="project-image">
      {% endif %}
    </div>
      {% unless forloop.last %}
    <hr class="news-divider">
     {% endunless %}
  {% endfor %}
</div>

