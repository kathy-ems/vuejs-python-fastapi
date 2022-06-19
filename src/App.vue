<template>
  <div class="bg-customGray-400 h-screen">
    <div class="container pb-96 bg-purple grid justify-items-center">
      <div class="h-auto w-96 bg-transparent">
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
