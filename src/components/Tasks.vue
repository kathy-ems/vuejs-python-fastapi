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
      <Filters @sort-items="sortItems" :openItems="openItems" />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
import Filters from "./Filters.vue";

export default {
  name: "Tasks",
  props: {
    tasks: Array,
    openItems: Number,
  },
  components: {
    Task,
    Filters,
  },
  methods: {
    async sortItems(sorter) {
      this.$emit("sort-items", sorter);
    },
  },
  emits: ["toggle-completed", "delete-task"],
};
</script>
