<template>
  <div>
    <Tasks @toggle-completed="toggleCompleted" :tasks="tasks" />
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
  methods: {
    toggleCompleted(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    },
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
