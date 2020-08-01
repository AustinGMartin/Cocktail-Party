<template>
  <div id="app">
    <Header />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
</style>
