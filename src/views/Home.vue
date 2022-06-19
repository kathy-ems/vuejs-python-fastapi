<template>
  <div>
    <Tasks
      @toggle-completed="toggleCompleted"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
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
    async toggleCompleted(id) {
      const taskToToggle = await this.fetchTask(id);
      const toggledTask = {
        ...taskToToggle,
        completed: !taskToToggle.completed,
      };
      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(toggledTask),
      });
      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, completed: data.completed } : task
      );
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
    async deleteTask(id) {
      if (confirm("Delete task?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
      }
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
