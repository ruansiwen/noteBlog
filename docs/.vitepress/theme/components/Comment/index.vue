<template>
  <div class="comment_box">
    <Giscus
      v-if="showComment"
      id="comments"
      :repo="comment.repo"
      :repoId="comment.repoId"
      :category="comment.category"
      :categoryId="comment.categoryId"
      :mapping="comment.mapping || 'pathname'"
      :inputPosition="comment.inputPosition || 'bottom'"
      theme="light"
      :lang="comment.lang || 'zh-CN'"
      :loading="comment.loading || 'lazy'"
    />
  </div>
</template>
<script setup lang="ts">
// import Giscus from "@giscus/vue";
// import { useConfig } from "../../utils/client";
import { ref, watch, toRefs } from "vue";
import { useData, useRoute } from "vitepress";

// const { comment } = useConfig();
const { theme } = useData();
const route = useRoute();
const showComment = ref(false);
const { comment } = toRefs<any>(theme);

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
