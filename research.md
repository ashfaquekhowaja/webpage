---
layout: page
title: Research Interests
permalink: /research
---

My broad research interests lie in computer vision, embedded systems, and haptic technologies, with a focus on developing innovative solutions for medical image processing, human-computer interaction, and intelligent sensing systems. I am particularly interested in exploring deep learning-based computer vision applications, real-time embedded AI systems, and haptic feedback mechanisms to enhance user experiences in healthcare, virtual reality, and robotics.

## Publications

### Journal Articles
{% for pub in site.data.publications %}
  {% if pub.journal %}
  <div class="publication">
    <h4>{{ pub.title }}</h4>
    <p>{{ pub.authors }}</p>
    <p><em>{{ pub.journal }}</em>, {{ pub.year }}</p>
    {% if pub.link %}<a href="{{ pub.link }}" class="button small">View Publication</a>{% endif %}
  </div>
  {% endif %}
{% endfor %}

### Conference Papers
{% for pub in site.data.publications %}
  {% if pub.conference %}
  <div class="publication">
    <h4>{{ pub.title }}</h4>
    <p>{{ pub.authors }}</p>
    <p><em>{{ pub.conference }}</em>, {{ pub.year }}</p>
    {% if pub.link %}<a href="{{ pub.link }}" class="button small">View Publication</a>{% endif %}
  </div>
  {% endif %}
{% endfor %}