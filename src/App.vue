<script setup>
import Layout from "./layout/Layout.vue";
import { useDarkMode } from './composables/useDarkMode.js';
const { changeMode } = useDarkMode()
</script>
<template>
  <Layout />
</template>
