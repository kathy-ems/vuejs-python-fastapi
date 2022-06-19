<template>
  <div>
    <div>{{ task.text }}</div>
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
