<template>
  <div :class="mode" class="relative">
    <img :src="bgImage" class="h-64 bg-cover" alt="Header Image" />
    <div class="h-screen bg-grayBlue-100 dark:bg-dmBlue40">
      <div class="container grid justify-items-center absolute top-0 pt-10">
        <div class="bg-transparent max-w-screen-sm min-w-min">
          <Header :mode="mode" @change-mode="changeMode" />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  data() {
    return {
      mode: "dark",
    };
  },
  computed: {
    bgImage() {
      if (this.mode === "dark") {
        return require("../images/bg-desktop-dark.jpg");
      } else {
        return require("../images/bg-desktop-light.jpg");
      }
    },
  },
  components: {
    Header,
  },
  emit: ["change-mode"],
  methods: {
    changeMode() {
      this.mode = this.mode === "dark" ? "light" : "dark";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap");
</style>
