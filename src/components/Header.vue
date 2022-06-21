<template>
  <header class="bg-transparent py-10 grid gap-1 grid-cols-8">
    <span
      class="text-4xl text-customGray-100 tracking-widest font-bold col-start-1"
    >
      TODO
    </span>
    <span class="col-start-8 col-span-1 justify-self-end pr-2 cursor-pointer">
      <img
        v-if="mode === 'light'"
        :src="this.icons.iconMoon"
        alt="Moon"
        class="inline-block align-text-left pr-1"
        @click="$emit('change-mode')"
      />
      <img
        v-if="mode === 'dark'"
        :src="this.icons.iconSun"
        alt="Sun"
        class="inline-block align-text-left pr-1"
        @click="$emit('change-mode')"
      />
    </span>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    mode: String,
    icons: Object,
  },
};
</script>
