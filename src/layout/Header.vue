<script setup>
import imagedark from "../assets/logo-dark.svg";
import imagelight from "../assets/logo-light.svg";
import { useDarkMode } from "../composables/useDarkMode";
const props = defineProps({
  classes: {
    type: String,
  },
});
const { theme } = useDarkMode();
</script>

<template>
  <header
    class="dark:bg-slate-700 flex px-4 bg-slate-100 dark:border-slate-500   items-center  border-gray-300 border-b"
    :class="classes">
    <div class="w-[284px] h-full border-gray-300 dark:border-slate-500  border-r grid items-center ">
      <img :src="theme === 'light' ? imagedark : imagelight" alt="" class="h-7">
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h2>Prueba</h2>
        <div>

        </div>
      </div>
    </div>
  </header>
</template>