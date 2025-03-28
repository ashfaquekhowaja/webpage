---
layout: page
title: 
permalink: /news/
---

## Latest Updates

{% for item in site.data.news %}
<div class="news-item">
  <h3>{{ item.title }}</h3>
  <p class="news-date">{{ item.date | date: "%B %d, %Y" }}</p>
  
  <div class="news-gallery">
    {% for img in item.images %}
      <img src="{{ img.path | relative_url }}" alt="{{ img.alt }}" loading="lazy">
    {% endfor %}
  </div>
  
  <p>{{ item.excerpt }}</p>
</div>
<hr>
{% endfor %}