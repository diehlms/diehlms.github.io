---
layout: default
title: Short Stories
permalink: /stories/
---

# Short Stories

{% assign story_posts = site.posts | where: "categories", "stories" %}
{% if story_posts.size > 0 %}
<ul class="post-list">
{% for post in story_posts %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </li>
{% endfor %}
</ul>
{% else %}
<p>No stories posted yet.</p>
{% endif %}