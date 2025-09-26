---
layout: default
title: Dreams
permalink: /dreams/
---

# Dreams

{% assign dream_posts = site.posts | where: "categories", "dreams" %}
{% if dream_posts.size > 0 %}
<ul class="post-list">
{% for post in dream_posts %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </li>
{% endfor %}
</ul>
{% else %}
<p>No dreams posted yet.</p>
{% endif %}