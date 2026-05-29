import { onMounted } from "vue";

export function useOml2d() {
  onMounted(async () => {
    const { createWidget } = await import("l2d-widget");
    createWidget({
      model: [
        {
          path: "https://model.hacxy.cn/cat-black/model.json",
        },
        {
          path: "https://model.hacxy.cn/cat-white/model.json",
        },
        {
          path: "https://model.hacxy.cn/shizuku/shizuku.model.json",
        },
        {
          path: "https://model.hacxy.cn/hibiki/hibiki.model.json",
        },
        {
          path: "https://model.hacxy.cn/nico/nico.model.json",
        },
        {
          path: "https://model.hacxy.cn/haru/haru.model.json",
        },
        {
          path: "https://model.hacxy.cn/rem/rem_tropical.model.json",
        },
        {
          path: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
        },
      ],
    });
  });
}
