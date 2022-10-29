<script setup>
const props = defineProps({
  classes: {
    type: String,
  },
});
</script>

<template>
  <div :class="classes" class=" bg bg-slate-300 dark:bg-slate-800">
    <slot></slot>
  </div>
</template>