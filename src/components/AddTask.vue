<template>
  <div
    class="bg-customGray-100 dark:bg-dmGrayBlue-410 dark:text-dmGrayBlue-300 mb-4 rounded-md shadow-customGray-900 shadow px-3 py-1"
  >
    <div class="items-center">
      <form @submit.prevent="onSubmit" class="add-form flex flex-wrap">
        <span>
          <button
            class="cursor-default w-5 h-5 rounded-full bg-transparent border inline-block align-middle border-dmGrayBlue-300"
          ></button>
        </span>
        <span class="w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/6 xl:w-1/6">
          <input
            type="text"
            v-model="text"
            name="text"
            placeholder="Add New Task"
            class="bg-customGray-100 dark:bg-dmGrayBlue-410 justify-self-start pl-6"
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
