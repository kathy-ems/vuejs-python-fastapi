<template>
  <div class="bg-gray-100 border-gray-400 border-b px-3 py-1">
    <div class="grid gap-2 grid-cols-8 items-center">
      <span class="justify-self-start pl-2">
        <i
          @click="$emit('toggle-completed')"
          :class="[
            task.completed
              ? 'fa-solid fa-circle-check'
              : 'fa fa-light fa-circle',
          ]"
        ></i>
      </span>
      <span
        :class="[
          task.completed ? 'line-through text-grayBlue-200' : '',
          'col-start-2 col-end-7',
        ]"
      >
        {{ task.text }}
      </span>
      <span class="col-start-8 col-span-1 justify-self-end pr-2">
        <i @click="$emit('delete-task')" class="fas fa-times" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>
