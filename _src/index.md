---
layout: base
---

### My posts

{%- for post in collections.general %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}