<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_5_32"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      :width="width"
      :height="height"
    >
      <circle cx="20" cy="20" r="20" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_5_32)">
      <path
        d="M0 0L20 20M40 40L20 20M20 20L40 0M20 20L0 40"
        :stroke="fill"
        stroke-width="10"
      />
    </g>
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
      default: "rgb(var(--green))",
    },
  },
};
</script>
<style lang=""></style>
