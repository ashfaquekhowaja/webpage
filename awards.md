---
layout: page
title: Awards and Scholarships
permalink: /awards
---

Throughout my academic journey, I have been honored with several scholarships and awards in recognition of my academic excellence and research contributions. These achievements reflect my dedication and commitment to learning, innovation, and academic success.


{% for award in site.data.awards %}
### {{ award.title }}
**{{ award.organization }}** – *{{ award.year }}*  
{{ award.description }}
{% endfor %}