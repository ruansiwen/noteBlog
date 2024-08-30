<template>
  <div class="comment_box">
    <!-- <Giscus v-if="showComment" id="comments" :repo="comment.repo || 'ruansiwen/noteBlog'" :repoId="comment.repoId"
      :category="comment.category" :categoryId="comment.categoryId" :mapping="comment.mapping || 'pathname'"
      :inputPosition="comment.inputPosition || 'bottom'" theme="light" :lang="comment.lang || 'zh-CN'"
      :loading="comment.loading || 'lazy'" /> -->
    <div ref="commentRef" id="comment"></div>
  </div>
</template>
<script setup lang="ts">
// import Giscus from "@giscus/vue";
// import { useConfig } from "../../utils/client";
import { ref, watch, toRefs, onMounted, onBeforeMount } from "vue";
import { useData, useRoute } from "vitepress";
import type { Ref } from "vue";

const route = useRoute();
const data = useData();
const commentRef: Ref<HTMLElement | null> = ref(null);
const showComment = ref(false);
// const {
//   theme: { comment },
// } = defineProps<{
//   theme;
// }>();
// const { comment } = useConfig();
// const { theme } = useData();
// const { comment } = toRefs<any>(theme);
// console.log(comment, comment.repo, data);

let getCommon = () => {
  try {
    if (commentRef.value) {
      // utterances
      // const script = document.createElement("script");
      // script.src = "https://utteranc.es/client.js";
      // script.async = true;
      // script.crossOrigin = "anonymous";
      // script.setAttribute("repo", "ruansiwen/noteBlog");
      // script.setAttribute("issue-term", "pathname");
      // script.setAttribute("label", "Comment");
      // script.setAttribute("theme", "preferred-color-scheme");
      // script.setAttribute("crossorigin", "anonymous");
      // commentRef.value.appendChild(script);
      // giscus
      const script = document.createElement("script");
      script.src = "https://giscus.app/client.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("data-repo", "ruansiwen/noteBlog");
      script.setAttribute("data-repo-id", "R_kgDOMnn78A");
      script.setAttribute("data-category", "General");
      // script.setAttribute("data-category", "Comments ");
      script.setAttribute("data-category-id", "DIC_kwDOMnn78M4Ch6HT");
      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "0");
      script.setAttribute("data-reactions-enabled", "1");
      script.setAttribute("data-emit-metadata", "0");
      script.setAttribute("data-input-position", "bottom");
      script.setAttribute("data-theme", "preferred_color_scheme");
      script.setAttribute("data-lang", "zh-CN");
      script.setAttribute("crossorigin", "anonymous");
      commentRef.value.appendChild(script);

    } else {
      console.warn(
        "Comments won t load because the commentRef element is null."
      );
    }
  } catch (error) {
    console.error("Comments loading failed.", error);
  }
};
onMounted(() => {
  getCommon();
})
watch(
  () => route.path,
  () => {
    showComment.value = false;
    setTimeout(() => {
      showComment.value = true;
    }, 200);
  },
  {
    immediate: true,
  }
);
</script>
<style lang="less" scoped>
.comment_box {
  margin-top: 40px;
}
</style>
