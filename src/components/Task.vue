<template>
  <div class="bg-customGray-100 border-customGray-400 border-b px-3 py-1">
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

<style>
.fa-circle-check {
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(hsl(192, 100%, 67%)),
    to(hsl(280, 87%, 65%))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fa-circle {
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(hsl(192, 100%, 67%)),
    to(hsl(280, 87%, 65%))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
