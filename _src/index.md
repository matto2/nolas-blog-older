---
layout: base
---

### My Posts

{%- for post in collections.general %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}


