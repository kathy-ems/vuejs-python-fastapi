<template>
  <div>
    <AddTask @add-task="addTask" />
    <Tasks
      @toggle-completed="toggleCompleted"
      @delete-task="deleteTask"
      @sort-items="sortItems"
      :tasks="tasks"
      :openItems="openItems"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Tasks from "@/components/Tasks.vue";
import AddTask from "@/components/AddTask.vue";

export default {
  name: "Home",
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      openItems: 0,
    };
  },
  methods: {
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
      this.getOpenItems(this.tasks);
    },
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
      this.getOpenItems(this.tasks);
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
    async deleteTask(task) {
      const id = task.id;
      if (confirm(`Delete task ${task.text}?`)) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
        this.getOpenItems(this.tasks);
      }
    },
    getOpenItems(tasks) {
      const openItems = tasks.filter((task) => task.completed === false);
      this.openItems = openItems.length;
    },
    async sortItems(sorter) {
      this.tasks = await this.fetchTasks();
      if (sorter === "active") {
        this.tasks = this.tasks.filter((task) => task.completed === false);
      }
      if (sorter === "completed") {
        this.tasks = this.tasks.filter((task) => task.completed === true);
      }
      if (sorter === "clear") {
        const toDelete = this.tasks.filter((task) => task.completed === true);
        toDelete.forEach(async (task) => {
          await this.deleteTask(task);
        });
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
    this.getOpenItems(this.tasks);
  },
  // emits: ["sort-items"],
};
</script>
