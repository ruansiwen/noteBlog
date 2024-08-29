<template>
  <div class="comment_box">
    <!-- <Giscus v-if="showComment" id="comments" :repo="comment.repo || 'ruansiwen/noteBlog'" :repoId="comment.repoId"
      :category="comment.category" :categoryId="comment.categoryId" :mapping="comment.mapping || 'pathname'"
      :inputPosition="comment.inputPosition || 'bottom'" theme="light" :lang="comment.lang || 'zh-CN'"
      :loading="comment.loading || 'lazy'" /> -->
      <div>123</div>
  </div>
</template>
<script setup lang="ts">
// import Giscus from "@giscus/vue";
// import { useConfig } from "../../utils/client";
import { ref, watch, toRefs } from "vue";
import { useData, useRoute } from "vitepress";

const route = useRoute();
const showComment = ref(false);
const { theme: { comment } } = defineProps<{
  theme
}>()
// const { comment } = useConfig();
// const { theme } = useData();
// const { comment } = toRefs<any>(theme);
console.log(comment, comment.repo);

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
