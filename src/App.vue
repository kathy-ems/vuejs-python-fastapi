<template>
  <div :class="mode" class="relative">
    <img :src="bgImage" class="h-64 w-full" alt="Header Image" />
    <div class="h-screen bg-grayBlue-100 dark:bg-dmBlue40">
      <div class="container grid justify-items-center absolute top-0 pt-10">
        <div class="bg-transparent max-w-screen-sm min-w-min">
          <Header :mode="mode" @change-mode="changeMode" :icons="icons" />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import iconMoon from "@/assets/icon-moon.svg";
import iconSun from "@/assets/icon-sun.svg";

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
        return require("@/assets/bg-desktop-dark.jpg");
      } else {
        return require("@/assets/bg-desktop-light.jpg");
      }
    },
    icons() {
      return {
        iconMoon,
        iconSun,
      };
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
