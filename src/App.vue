<template>
  <div class="bg-gray-400">
    <div class="container h-auto bg-brightBlue">
      <div class="h-auto w-96 bg-teal">
        <Header />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  }
};
</script>

<style>
@import url("https://fonts.google.com/specimen/Josefin+Sans:wght@400;700&display=swap");
</style>
