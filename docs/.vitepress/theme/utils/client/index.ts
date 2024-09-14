import {
  ref,
  Component,
  defineComponent,
  computed,
  provide,
  inject,
  InjectionKey,
  Ref,
  ComputedRef,
  h,
} from "vue";
import { Theme, useData, useRoute, withBase } from "vitepress";

export const useTypewriter = (string: string | string[] = "", time: number) => {
  const currentString = ref("");
  const currentIndex = ref(0);

  const currentTextIndex = ref(0);
  let clock;
  if (typeof string === "string") {
    clock = setInterval(() => {
      currentIndex.value += 1;
      if (string.length >= currentIndex.value) {
        currentString.value = string.substring(0, currentIndex.value);
      } else {
        currentIndex.value = 0;
        // clearInterval(clock);
      }
    }, time);
  } else {
    clock = setInterval(() => {
      let text = string[currentTextIndex.value];
      currentIndex.value += 1;
      if (text.length >= currentIndex.value) {
        currentString.value = text.substring(0, currentIndex.value);
      } else {
        currentIndex.value = 0;
        currentString.value = "";
        currentTextIndex.value += 1;
        if (currentTextIndex.value == string.length) {
          currentTextIndex.value = 0;
        }
      }
    }, time);
  }

  return { currentString, clock };
};
