<template>
  <div>
    <Tasks />
  </div>
</template>

<script>
// @ is an alias to /src
import Tasks from "@/components/Tasks.vue";

export default {
  name: "Home",
  components: {
    Tasks,
  },
};
</script>
