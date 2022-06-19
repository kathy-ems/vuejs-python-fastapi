<template>
  <div>
    <Tasks :tasks="tasks" />
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
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors appt",
        completed: true,
      },
      {
        id: 2,
        text: "Meeting at school",
        completed: false,
      },
      {
        id: 3,
        text: "Water Trees",
        completed: false,
      },
      {
        id: 4,
        text: "Grocery shopping",
        completed: true,
      },
    ];
  },
};
</script>
