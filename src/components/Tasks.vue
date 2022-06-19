<template>
  <div>
    <div
      class="bg-customGray-100 rounded-md shadow-customGray-900 shadow-2xl py-2"
    >
      <div :key="task.id" v-for="task in tasks">
        <Task
          @toggle-completed="$emit('toggle-completed', task.id)"
          @delete-task="$emit('delete-task', task)"
          :task="task"
        />
      </div>
      <div class="p-4 text-xs">
        {{ openItems }} items to do |
        <span
          @click="$emit('sort-items', 'all')"
          class="cursor-pointer hover:underline hover:text-teal"
        >
          All</span
        >
        |
        <span
          @click="$emit('sort-items', 'active')"
          class="cursor-pointer hover:underline hover:text-teal"
        >
          Active</span
        >
        |
        <span
          @click="$emit('sort-items', 'completed')"
          class="cursor-pointer hover:underline hover:text-teal"
        >
          Completed</span
        >
        |
        <span
          @click="$emit('sort-items', 'clear')"
          class="cursor-pointer hover:underline hover:text-teal"
        >
          Clear Completed</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",
  props: {
    tasks: Array,
    openItems: Number,
  },
  components: {
    Task,
  },
  emits: ["toggle-completed", "delete-task"],
};
</script>
