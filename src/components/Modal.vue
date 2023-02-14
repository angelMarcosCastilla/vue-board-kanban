<script setup>
const props = defineProps({
  title: {
    type: String,
  },
})

</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-slate-900/50" >
    <div class="grid place-content-center h-full w-full" >
      <section class="bg-white min-w-[400px] px-4 py-3 rounded-2xl">
        <header class="pb-3">
          {{ props.title }} 
        </header>
        <div>

        </div>
        <footer>

        </footer>
      </section>
    </div>
  </div>
</template>