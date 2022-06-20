<template>
  <div>
    <div
      class="bg-customGray-100 dark:bg-dmGrayBlue-410 rounded-md shadow-customGray-900 dark:shadow-dmBlue40 shadow-2xl py-2"
    >
      <draggable :list="tasks">
        <div :key="task.id" v-for="task in tasks" class="cursor-move">
          <Task
            @toggle-completed="$emit('toggle-completed', task.id)"
            @delete-task="$emit('delete-task', task)"
            :task="task"
            :icons="icons"
          />
        </div>
      </draggable>
      <Filters @sort-items="sortItems" :openItems="openItems" />
    </div>
    <div
      class="text-grayBlue-400 dark:text-dmGrayBlue-100 p-6 text-xs text-center"
    >
      Drag and drop to reorder list
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
import Filters from "./Filters.vue";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  name: "Tasks",
  props: {
    tasks: Array,
    openItems: Number,
    icons: Object,
  },
  components: {
    Task,
    Filters,
    draggable: VueDraggableNext,
  },
  methods: {
    async sortItems(sorter) {
      this.$emit("sort-items", sorter);
    },
  },
  emits: ["toggle-completed", "delete-task", "sort-items"],
};
</script>
