<template>
  <header class="bg-transparent py-10 grid gap-1 grid-cols-8">
    <span
      class="text-4xl text-customGray-100 tracking-widest font-bold col-start-1"
      >TODO</span
    >
    <span
      class="text-customGray-100 col-start-8 col-span-1 justify-self-end pr-2"
    >
      <i
        :class="[mode === 'light' ? 'fa-moon' : 'fa-sun', 'fa-solid']"
        @click="$emit('change-mode')"
      ></i>
    </span>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    mode: Boolean,
  },
};
</script>
