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
      <div class="github-link">
        <a href="https://github.com/{{ project.github }}" class="button" target="_blank">View on GitHub</a>
      </div>
      {% endif %}
     {% if project.images %}
      <div class="project-images">
        {% for img in project.images %}
          <img src="/assets/img/{{ img }}" alt="{{ project.title }} image" class="news-image">
        {% endfor %}
      </div>
      {% endif %}
      {% if project.video %}
        <video class="project-video" controls>
        <source src="/assets/Video/{{ project.video }}" type="video/mp4">
      Your browser does not support the video tag.
      </video>
      {% endif %}
      {% if project.video_caption %}
          <figcaption class="video-caption">{{ project.video_caption }}</figcaption>
        {% endif %}
    </div>
      {% unless forloop.last %}
    <hr class="news-divider">
     {% endunless %}
  {% endfor %}
</div>

