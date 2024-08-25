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

export const useTypewriter = (string: string = "", time: number) => {
  const currentString = ref("");
  const currentIndex = ref(0);
  let clock = setInterval(() => {
    currentIndex.value += 1;
    if (string.length >= currentIndex.value) {
      currentString.value = string.substring(0, currentIndex.value);
    } else {
      clearInterval(clock);
    }
  }, time);

  return { currentString };
};
