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
import { ref, watch, toRefs, onMounted } from "vue";
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
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("repo", "ruansiwen/noteBlog");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("label", "Comment");
      script.setAttribute("theme", "preferred-color-scheme");
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
}),
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
