---
layout: default
title: Home
---

# Welcome to My Blog

This is a simple Jekyll blog hosted on GitHub Pages. Here are my latest posts:

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </li>
{% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p>No posts yet. Check back soon!</p>
{% endif %}