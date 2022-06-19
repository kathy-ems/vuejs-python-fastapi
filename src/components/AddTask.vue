<template>
  <div class="bg-gray-100 mb-4 rounded-md shadow-gray-900 shadow px-3 py-1">
    <div class="grid gap-2 grid-cols-8 items-center">
      <form @submit.prevent="onSubmit" class="add-form">
        <span class="justify-self-start pl-2">
          <i class="fa fa-light fa-circle"></i>
        </span>
        <span class="col-start-2 col-span-7 pr-2">
          <input
            type="text"
            v-model="text"
            name="text"
            placeholder="Add New Task"
          />
        </span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      completed: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add a task");
        return;
      }
      const newTask = {
        text: this.text,
        completed: this.completed,
      };
      this.$emit("add-task", newTask);

      this.text = "";
      this.completed = false;
    },
  },
};
</script>
