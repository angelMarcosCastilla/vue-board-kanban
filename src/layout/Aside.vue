<script setup>
const props = defineProps({
  classes: {
    type: String,
  },
});
</script>

<template>
  <div :class="classes" class="bg-slate-200 dark:bg-slate-700">
    aside
  </div>
</template>