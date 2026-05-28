<template>
  <Layout>
    <template #home-hero-before>
      <Home />
    </template>
    <template #layout-bottom>
    </template>
    <template #doc-after>
      <Comment v-if="!isHome" :theme="theme" :key="page.filePath"></Comment>
    </template>
  </Layout>
</template>
<script setup lang="ts">
import { unref } from "vue";
import Theme from "vitepress/theme";
import Home from "../pages/Home/index.vue";
import Comment from "../components/Comment/index.vue";
import { useData } from "vitepress";
import { computed, nextTick, provide } from "vue";
import { useOml2d } from "../hooks/useOml2d";

const { Layout } = Theme;
const { page, isDark, theme } = useData();

const isHome = computed(() => unref(page)?.filePath === "index.md");

// 看板娘
useOml2d();

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

/* 为暗色模式添加样式 */
@media (prefers-color-scheme: dark) {
  .root {
    animation: none;
    mix-blend-mode: normal;
    z-index: 1;
  }
}
.light .root {
  animation: none;
  mix-blend-mode: normal;
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
