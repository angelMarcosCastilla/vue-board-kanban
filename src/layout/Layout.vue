<script setup>
import Aside from "./Aside.vue";
import Header from "./Header.vue";
import Main from "./Main.vue";
</script>
<template>
  <div class="layout">
    <Header classes="header" />
    <Aside classes="aside" />
    <Main classes="main">
      <router-view/>
    </Main>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 96px 1fr;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "header header" "aside main";
}

.header {
  grid-area: header
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}
</style>


