---
layout: default
title: Blog
permalink: /blog/
---

# Blog

{% assign blog_posts = site.posts | where: "categories", "blog" %}
{% if blog_posts.size > 0 %}
<ul class="post-list">
{% for post in blog_posts %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </li>
{% endfor %}
</ul>
{% else %}
<p>No blog posts yet.</p>
{% endif %}