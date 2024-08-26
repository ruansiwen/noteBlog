---
hello: world
sticky: 2
---

# Demo

## Markdown Content

The count is: {{ count }}

<!-- <giscus-widget
        id="comments"
        repo="ruansiwen/noteBlog"
        repoid="R_kgDOMnn78A"
        category="Announcements"
        categoryid="DIC_kwDOMnn78M4Ch6HS"
        mapping="title"
        term="Welcome to giscus!"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme="light"
        lang="en"
        loading="lazy"
      ></giscus-widget> -->
<!-- <script src="https://giscus.app/client.js"
        data-repo="ruansiwen/noteBlog"
        data-repo-id="R_kgDOMnn78A"
        data-category="Announcements"
        data-category-id="DIC_kwDOMnn78M4Ch6HS"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script> -->

<button :class="$style.button" @click="count++">Increment</button>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
