<template>
  <div>
    <div
      class="bg-customGray-100 dark:bg-dmGrayBlue-410 rounded-md shadow-customGray-900 dark:shadow-dmBlue40 shadow-2xl py-2"
    >
      <draggable
        @change="updateOrder"
        class="w-full"
        :list="tasks"
        ghost-class="ghost"
      >
        <div :key="task.id" v-for="task in tasks" class="cursor-move">
          <Task
            @toggle-completed="$emit('toggle-completed', task.id)"
            @delete-task="$emit('delete-task', task)"
            :task="task"
            :icons="icons"
          />
        </div>
      </draggable>
      <Filters
        @filter-items="filterItems"
        :openItems="openItems"
        :filterLevel="filterLevel"
      />
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
    filterLevel: String,
  },
  components: {
    Task,
    Filters,
    draggable: VueDraggableNext,
  },
  methods: {
    async filterItems(sorter) {
      this.$emit("filter-items", sorter);
    },
    async updateOrder(e) {
      const { newIndex, oldIndex, element } = e.moved;
      const taskUpdateData = { ...element, oldIndex, newIndex };
      this.$emit("update-order", taskUpdateData);
    },
  },
  emits: ["toggle-completed", "delete-task", "filter-items", "update-order"],
};
</script>
