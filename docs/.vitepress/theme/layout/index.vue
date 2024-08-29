<template>
  <Layout>
    <template #home-hero-before>
      <Home />
    </template>
    <template #layout-bottom>
      <h6>layout-bottom</h6>
      <!-- <Footer v-if="layout === 'home'" /> -->
      <ClientOnly>
        <BoardPets />
      </ClientOnly>
    </template>

    <template #sidebar-nav-after>
      <h6>sidebar-nav-after</h6>
      <!-- <Sidebar /> -->
    </template>
    <template #doc-before>
      <h6>doc-before</h6>
      <!-- <ClientOnly>
        <DocMeta :category="frontmatter.category" />
      </ClientOnly> -->
    </template>
    <template #doc-after>
      <h6>doc-after</h6>
      <!-- <Comment :theme="theme" /> -->
      <Comment v-if="!isHome" :key="page.filePath"></Comment>
      <!-- 
      <ClientOnly>
        <ImagePreview />
        <BackToTop />
      </ClientOnly> -->
    </template>
    <!-- 此处将渲染 markdown 内容 -->
    <div v-if="layout === 'home'">Custom home page!</div>
    <div v-if="layout === 'about'">Custom about page!</div>
    <div v-if="pageNotFound">Custom 404 page!</div>
    <div>-----</div>
    <Content />
    <div>-----</div>
  </Layout>
</template>
<script setup lang="ts">
import { unref } from "vue";
import Theme from "vitepress/theme";
import Home from "../pages/Home/index.vue";
// import Sidebar from "../components/Sidebar/index.vue";
// import Footer from "../components/Footer/index.vue";
import Comment from "../components/Comment/index.vue";
// import ImagePreview from "../components/ImagePreview/index.vue";
// import BackToTop from "../components/BackToTop/index.vue";
// import DocMeta from "../components/DocMeta/index.vue";
import BoardPets from "../components/BoardPets/index.vue";
import { useData } from "vitepress";
import { computed, nextTick, provide } from "vue";

const { Layout } = Theme;
const { page, frontmatter, isDark, theme } = useData();

const layout = computed(() => frontmatter.value.layout);
const pageNotFound = computed(() => page.value.isNotFound);
const isHome = computed(() => unref(page)?.filePath === "index.md");
console.log("layout======", layout.value);

// 自定义颜色切换
const enableTransitions = () => {
  return (
    "startViewTransition" in document &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  );
};
provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  );
});
</script>

<style>
.home_container {
  display: flex;
  width: 1050px;
  gap: 20px;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
