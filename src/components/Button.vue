
<script setup lang="ts">
import { defineProps } from 'vue'

interface propsType {
  component: "button" | "link"
}
const props = defineProps<propsType>()

</script>

<template>

</template>