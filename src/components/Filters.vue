<template>
  <div
    class="text-grayBlue-400 dark:text-dmGrayBlue-100 p-4 text-xs flex > flex-wrap"
  >
    <span class="col-start-1 col-span-2 p-1 flex-1">
      {{ openItems }} items to do
    </span>
    <span
      @click="emitSortItems('all')"
      class="cursor-pointer hover:underline hover:text-brightBlue p-1 flex-2"
    >
      All</span
    >
    <span
      @click="emitSortItems('active')"
      class="cursor-pointer hover:underline hover:text-brightBlue p-1 flex-2"
    >
      Active</span
    >
    <span
      @click="emitSortItems('completed')"
      class="cursor-pointer hover:underline hover:text-brightBlue p-1 flex-2"
    >
      Completed</span
    >
    <span
      @click="emitSortItems('clear')"
      class="cursor-pointer hover:underline hover:text-brightBlue p-1 flex-1 text-center"
    >
      Clear Completed</span
    >
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    openItems: Number,
  },
  methods: {
    emitSortItems(e) {
      this.$emit("filter-items", e);
    },
  },
};
</script>
