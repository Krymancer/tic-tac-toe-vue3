<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="15" :stroke="fill" stroke-width="10" />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    width: {
      type: [Number, String],
      default: 40,
    },
    height: {
      type: [Number, String],
      default: 40,
    },
    fill: {
      type: String,
      default: "rgb(var(--yellow))",
    },
  },
};
</script>

<style lang=""></style>
