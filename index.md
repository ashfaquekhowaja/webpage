---
layout: home
title: Home
---

<section class="hero">
  <div class="hero-content">
   <div class="profile-image">
  <div class="profile-image-container">
    <img src="{{ 'assets/img/profile.png' | relative_url }}" alt="Ashfaque Khowaja">
  </div>
</div>
    <h1>{{ site.title }}</h1>
    <p class="subtitle">PhD in Intelligent Manufacturing and Robotics</p>
  </div>
</section>

<section class="about">
  <h2>About Me</h2>
  <p>Hi! I am Ashfaque Khowaja, a first-year PhD student in the <a href="https://designschool.sustech.edu.cn/">School of Design</a> at <a href="http://www.sustech.edu.cn/en/">Southern University of Science and Technology (SUSTech)</a>. My research interest is in <strong>Human-Computer Interaction (HCI)</strong>, mainly interactions using haptics.</p>

<p>I am currently working under the supervision of <a href="https://immersivedesignresearch.com/seungwoo">Prof. Seungwoo Je</a> at the <a href="https://immersivedesignresearch.com/">Immersive Design Group</a> at SUSTech.</p>
  
  <div class="quick-links">
    <a href="/about" class="button">Full Bio</a>
    <a href="/research" class="button">My Research</a>
    <a href="{{ '/assets/CV.pdf' | relative_url }}" class="button">Download CV</a>
  </div>
</section>

<section class="highlights">
  <div class="highlight-box">
    <h3>Latest Publication</h3>
    {% assign latest_pub = site.data.publications | first %}
    <p>{{ latest_pub.title }}</p>
    <p><em>{{ latest_pub.journal }}</em> ({{ latest_pub.year }})</p>
    <a href="{{ latest_pub.link }}" class="button small">Read More</a>
  </div>
  
  <!-- <div class="highlight-box">
    <h3>Current Project</h3>
    {% assign current_project = site.data.projects | first %}
    <p>{{ current_project.title }}</p>
    <p>{{ current_project.description | truncate: 100 }}</p>
    <a href="/projects" class="button small">View Project</a>
  </div> -->
  
<div class="highlight-box">
  <h3>Recent News</h3>
  {% comment %} Get all research items and sort by date (newest first) {% endcomment %}
  {% assign research_news = site.data.news | where: "category", "Research and Academic Activities" | first %}
  {% assign latest_research = research_news.items | sort: "date" | reverse | first %}
  
  <h4>{{ latest_research.title }}</h4>
  <p class="news-date">{{ latest_research.date | date: "%b %d, %Y" }}</p>
  
  <div class="news-images">
    {% if latest_research.images.size > 0 %}
      {% assign first_image = latest_research.images | first %}
      <img src="{{ first_image.path | relative_url }}" 
           alt="{{ first_image.alt }}" 
           width="200"
           class="news-thumbnail"
           loading="lazy">
    {% endif %}
  </div>
  
  <p class="news-excerpt">{{ latest_research.excerpt | truncate: 120 }}</p>
  
  <a href="{{ latest_research.url | default: '/news/' }}" class="button small">
    Read More
  </a>
</div>
</section>