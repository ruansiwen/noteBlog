<template>
  <div class="contrib-page">
    <header class="contrib-header">
      <div class="header-accent"></div>
      <h1 class="contrib-title">
        <svg class="gh-icon" viewBox="0 0 16 16" width="28" height="28">
          <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        Contribution Graph
      </h1>
      <p class="contrib-subtitle">A year of code, commit by commit</p>
    </header>

    <div class="contrib-card" ref="graphRef" id="graph"></div>

    <div class="legend-bar">
      <span class="legend-text">Less</span>
      <i class="legend-cell c0"></i>
      <i class="legend-cell c1"></i>
      <i class="legend-cell c2"></i>
      <i class="legend-cell c3"></i>
      <i class="legend-cell c4"></i>
      <span class="legend-text">More</span>
    </div>

    <footer class="contrib-footer">
      <a href="https://github.com/vartao" target="_blank" class="gh-link">
        <svg viewBox="0 0 16 16" width="14" height="14">
          <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        vartao on GitHub
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import GitContribGraph from "git-contrib-graph";

const graphRef = ref<HTMLElement>();

onMounted(() => {
  const graph = new GitContribGraph({
    username: "vartao",
    container: "#graph",
    theme: "github",
  });
  graph.render();
});
</script>

<style scoped>
.contrib-page {
  max-width: 1080px;
  margin: 0 auto;
  padding: 48px 32px 64px;
}

/* ── Header ── */
.contrib-header {
  margin-bottom: 28px;
}
.header-accent {
  width: 40px;
  height: 3px;
  border-radius: 2px;
  background: var(--vp-c-brand-1);
  margin-bottom: 16px;
}
.contrib-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--vp-c-text-1);
}
.gh-icon {
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}
.contrib-subtitle {
  margin: 8px 0 0;
  font-size: 14px;
  color: var(--vp-c-text-3);
}

/* ── Card ── */
.contrib-card {
  display: inline-block;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 24px;
  overflow-x: auto;
}

/* ── Legend ── */
.legend-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  margin-top: 12px;
}
.legend-text {
  font-size: 11px;
  color: var(--vp-c-text-3);
  margin: 0 5px;
}
.legend-cell {
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 2px;
}
.c0 { background: #ebedf0; }
.c1 { background: #9be9a8; }
.c2 { background: #40c463; }
.c3 { background: #30a14e; }
.c4 { background: #216e39; }
.dark .c0 { background: #161b22; }
.dark .c1 { background: #0e4429; }
.dark .c2 { background: #006d32; }
.dark .c3 { background: #26a641; }
.dark .c4 { background: #39d353; }

/* ── Footer ── */
.contrib-footer {
  margin-top: 20px;
}
.gh-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: color 0.2s;
}
.gh-link:hover {
  color: var(--vp-c-brand-1);
}
</style>
