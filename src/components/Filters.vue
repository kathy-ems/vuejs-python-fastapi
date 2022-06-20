<template>
  <div
    class="text-grayBlue-400 dark:text-dmGrayBlue-100 p-4 text-xs grid gap-2 grid-cols-8 justify-items-center"
  >
    <span class="col-start-1 col-span-2"> {{ openItems }} items to do </span>
    <span
      @click="emitSortItems('all')"
      class="cursor-pointer hover:underline hover:text-brightBlue col-start-3 col-span-1 justify-self-end"
    >
      All</span
    >
    <span
      @click="emitSortItems('active')"
      class="cursor-pointer hover:underline hover:text-brightBlue col-start-4 col-span-1"
    >
      Active</span
    >
    <span
      @click="emitSortItems('completed')"
      class="cursor-pointer hover:underline hover:text-brightBlue col-start-5 col-span-1"
    >
      Completed</span
    >
    <span
      @click="emitSortItems('clear')"
      class="cursor-pointer hover:underline hover:text-brightBlue col-start-7 col-span-2 pr-2"
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
      this.$emit("sort-items", e);
    },
  },
};
</script>
