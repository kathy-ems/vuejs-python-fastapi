<template>
  <div>
    <div>
      <div :key="task.id" v-for="task in tasks">
        <Task
          @toggle-completed="$emit('toggle-completed', task.id)"
          @delete-task="$emit('delete-task', task.id)"
          :task="task"
        />
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
