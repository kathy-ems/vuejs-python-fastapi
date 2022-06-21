<template>
  <div
    class="text-grayBlue-400 dark:text-dmGrayBlue-100 bg-customGray-100 dark:bg-dmGrayBlue-410 border-customGray-400 dark:border-dmGrayBlue-400 border-b px-3 py-1"
  >
    <div class="grid gap-2 grid-cols-8 items-center">
      <span
        class="justify-self-start cursor-pointer"
        @click="$emit('toggle-completed')"
        :class="[
          task.completed
            ? 'line-through text-grayBlue-200 dark:text-dmGrayBlue-300'
            : '',
          'col-start-1 col-end-7',
        ]"
        data-test="todo-checkbox"
      >
        <span
          :class="[
            task.completed
              ? 'pl-1 bg-gradient-to-r from-teal to-purple border-none rounded-full'
              : 'tag:button w-5 h-5 rounded-full bg-transparent border inline-block align-middle border-dmGrayBlue-300',
          ]"
        >
          <img
            v-show="task.completed"
            :src="this.icons.iconCheck"
            alt="Check box"
            class="inline-block align-text-left pr-1"
          />
        </span>
        <span class="pl-7">
          {{ task.text }}
        </span>
      </span>
      <span
        @click="$emit('delete-task')"
        class="col-start-8 col-span-1 justify-self-end pr-2"
      >
        <img
          :src="this.icons.iconCross"
          alt="Delete"
          class="inline-block cursor-pointer"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
    icons: Object,
  },
};
</script>
