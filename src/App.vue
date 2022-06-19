<template>
  <div class="bg-purple h-screen">
    <div class="container h-screen bg-purple grid justify-items-center">
      <div class="bg-transparent max-w-screen-sm">
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
  },
};
</script>

<style>
@import url("https://fonts.google.com/specimen/Josefin+Sans:wght@400;700&display=swap");
</style>
