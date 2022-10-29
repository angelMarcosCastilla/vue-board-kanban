<script setup>
import imagedark from "../assets/logo-dark.svg";
import imagelight from "../assets/logo-light.svg";
import { useDarkMode } from "../composables/useDarkMode";
const { theme, changeTheme } = useDarkMode();

const props = defineProps({
  classes: {
    type: String,
  },
});
</script>

<template>
  <header class="dark:bg-slate-700 flex px-4 bg-slate-200 items-center " :class="classes">
    <div class="w-[250px]">
      <img :src="theme === 'light' ? imagedark : imagelight" alt="" class="h-6">
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h2>Prueba</h2>
        <div>
          <button @click="changeTheme"> + create {{ theme }}</button>
        </div>
      </div>
    </div>
  </header>
</template>