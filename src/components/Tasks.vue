<template>
  <div>
    <div
      class="bg-customGray-100 rounded-md shadow-customGray-900 shadow-2xl py-2"
    >
      <div :key="task.id" v-for="task in tasks">
        <Task
          @toggle-completed="$emit('toggle-completed', task.id)"
          @delete-task="$emit('delete-task', task.id)"
          :task="task"
        />
      </div>
      <div class="p-4 text-xs">
        # of items left | All | Active | Completed | Clear Completed
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
  },
  components: {
    Task,
  },
  emits: ["toggle-completed", "delete-task"],
};
</script>
