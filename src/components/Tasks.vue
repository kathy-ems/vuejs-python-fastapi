<template>
  <div>
    <div
      class="bg-customGray-100 dark:bg-dmGrayBlue-410 rounded-md shadow-customGray-900 dark:shadow-dmBlue40 shadow-2xl py-2"
    >
      <div :key="task.id" v-for="task in tasks">
        <Task
          @toggle-completed="$emit('toggle-completed', task.id)"
          @delete-task="$emit('delete-task', task)"
          :task="task"
        />
      </div>
      <div class="p-4 text-xs grid gap-2 grid-cols-8 justify-items-center">
        <span class="col-start-1 col-span-2">
          {{ openItems }} items to do
        </span>
        <span
          @click="$emit('sort-items', 'all')"
          class="cursor-pointer hover:underline hover:text-brightBlue col-start-3 col-span-1 justify-self-end"
        >
          All</span
        >
        <span
          @click="$emit('sort-items', 'active')"
          class="cursor-pointer hover:underline hover:text-brightBlue col-start-4 col-span-1"
        >
          Active</span
        >
        <span
          @click="$emit('sort-items', 'completed')"
          class="cursor-pointer hover:underline hover:text-brightBlue col-start-5 col-span-1"
        >
          Completed</span
        >
        <span
          @click="$emit('sort-items', 'clear')"
          class="cursor-pointer hover:underline hover:text-brightBlue col-start-7 col-span-2 pr-2"
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
