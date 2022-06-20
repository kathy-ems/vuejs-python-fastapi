<template>
  <div :class="mode">
    <div class="h-screen bg-grayBlue-100 dark:bg-dmBlue40">
      <div class="h-48 bg-purple dark:bg-dmPurple">
        <div class="container grid justify-items-center">
          <div class="bg-transparent max-w-screen-sm min-w-min">
            <Header :mode="mode" @change-mode="changeMode" />
            <router-view />
          </div>
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
