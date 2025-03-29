---
layout: page
title: Latest Updates and News
permalink: /news/
---

{% for category in site.data.news %}
<div class="news-category">
  <h2>{{ category.category }}</h2>
  
  {% for item in category.items %}
  <div class="news-item">
    <h3>{{ item.title }}</h3>
    <p class="news-date">{{ item.date | date: "%B %d, %Y" }}</p>
    
    {% if item.images.size > 0 %}
    <div class="news-gallery">
      {% for img in item.images %}
        <img src="{{ img.path | relative_url }}" 
             alt="{{ img.alt }}" 
             loading="lazy"
             class="news-image">
      {% endfor %}
    </div>
    {% endif %}
    
    <p class="news-excerpt">{{ item.excerpt }}</p>
  </div>
  
  {% unless forloop.last %}
    <hr class="news-divider">
  {% endunless %}
  {% endfor %}
</div>
{% endfor %}