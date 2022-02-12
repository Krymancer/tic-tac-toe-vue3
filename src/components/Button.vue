<template>
  <div class="container" :class="type">
    {{ text }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: "Button",
    },
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3em;
  border-radius: 10px;
  font-weight: bolder;
  font-size: 1.2em;
  cursor: pointer;
}

.container:hover {
  opacity: 0.5;
}

.primary {
  background-color: rgb(var(--primary));
  color: rgb(var(--gray));
  box-shadow: 0px 5px 0px rgba(var(--primary), 0.25);
}

.secondary {
  background-color: rgb(var(--yellow));
  box-shadow: 0px 5px 0px rgba(var(--yellow), 0.5);
  color: rgb(var(--background));
}

.tertiary {
  background-color: rgb(var(--green));
  box-shadow: 0px 5px 0px rgba(var(--green), 0.25);
  color: rgb(var(--background));
}

.cancel {
  background-color: rgb(var(--gray));
  box-shadow: 0px 5px 0px rgba(var(--gray), 0.25);
  color: rgb(var(--background));
}
</style>
