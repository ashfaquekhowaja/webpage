---
layout: home
title: Home
---

<section class="hero">
  <div class="hero-content">
   <div class="profile-image">
  <div class="profile-image-container">
    <img src="{{ 'assets/img/image.jpg' | relative_url }}" alt="Ashfaque Khowaja">
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
    {% assign latest_news = site.posts | first %}
    <p>{{ latest_news.title }}</p>
    <p>{{ latest_news.date | date: "%b %Y" }}</p>
    <a href="{{ latest_news.url }}" class="button small">Read News</a>
  </div>
</section>