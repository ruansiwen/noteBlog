import { build } from "vitepress";

// VitePress build 完成后，某些依赖可能阻止 Node 进程退出
// 这个脚本确保 build 完成后强制退出
try {
  await build("docs");
} finally {
  process.exit(0);
}
