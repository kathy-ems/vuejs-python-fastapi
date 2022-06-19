<template>
  <div class="bg-purple h-screen dark:bg-dmPurple" :class="mode">
    <div
      class="container h-screen bg-purple dark:bg-dmPurple grid justify-items-center"
    >
      <div class="bg-transparent max-w-screen-sm min-w-min">
        <Header :mode="mode" @change-mode="changeMode" />
        <router-view />
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
@import url("https://fonts.google.com/specimen/Josefin+Sans:wght@400;700&display=swap");
</style>
