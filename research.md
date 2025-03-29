---
layout: page
title: Research Interests
permalink: /research
---

My broad research interests lie in computer vision, embedded systems, and haptic technologies, with a focus on developing innovative solutions for medical image processing, human-computer interaction, and intelligent sensing systems. I am particularly interested in exploring deep learning-based computer vision applications, real-time embedded AI systems, and haptic feedback mechanisms to enhance user experiences in healthcare, virtual reality, and robotics.

## Publications

<h3 class="underlined">Journal Articles</h3>

{% assign journal_count = 1 %}
{% for pub in site.data.publications %}
  {% if pub.journal %}
  <div class="publication">
    <h4>{{ journal_count }}. {{ pub.title }}</h4>
    <p>{{ pub.authors }}</p>
    <p><em>{{ pub.journal }}</em>, {{ pub.year }}</p>
    {% if pub.link %}<a href="{{ pub.link }}" class="button small">View Publication</a>{% endif %}
  </div>
  {% assign journal_count = journal_count | plus: 1 %}
  {% endif %}
{% endfor %}


<h3 class="underlined">Conference Papers</h3>

{% assign conference_count = 1 %}
{% for pub in site.data.publications %}
  {% if pub.conference %}
  <div class="publication">
    <h4>{{ conference_count }}. {{ pub.title }}</h4>
    <p>{{ pub.authors }}</p>
    <p><em>{{ pub.conference }}</em>, {{ pub.year }}</p>
    {% if pub.link %}<a href="{{ pub.link }}" class="button small">View Publication</a>{% endif %}
  </div>
  {% assign conference_count = conference_count | plus: 1 %}
  {% endif %}
{% endfor %}