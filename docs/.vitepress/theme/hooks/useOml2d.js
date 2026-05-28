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
      ],
    });
  });
}
