<template>
  <div
    class="bg-customGray-100 dark:bg-dmGrayBlue-410 dark:text-dmGrayBlue-300 mb-4 rounded-md shadow-customGray-900 shadow px-3 py-1"
  >
    <div class="items-center">
      <form @submit.prevent="onSubmit" class="add-form grid gap-2 grid-cols-12">
        <span class="justify-self-start col-start-1 pl-2">
          <i class="fa fa-light fa-circle cursor-pointer"></i>
        </span>
        <span class="col-start-2 col-span-4">
          <input
            type="text"
            v-model="text"
            name="text"
            placeholder="Add New Task"
            class="bg-customGray-100 dark:bg-dmGrayBlue-410 justify-self-start -ml-3"
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
