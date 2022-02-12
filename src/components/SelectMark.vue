<template>
  <div class="container">
    <div class="header">PICK PLAYER 1'S MARK</div>
    <Switch />
    <div class="remainder">REMEMBER X GOES FIRST</div>
  </div>
</template>

<script lang="ts">
import Switch from "./Switch.vue";
export default {
  components: {
    Switch,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  background-color: rgb(var(--primary));
  border-radius: 10px;
  box-shadow: 0px 5px 0px rgba(var(--primary), 0.5);
}

.header {
  font-size: 2em;
  font-weight: bolder;
  color: rgb(var(--gray));
  margin: 1em;
}

.remainder {
  margin: 1em;
  font-size: 1em;
  font-weight: bolder;
  color: rgba(var(--gray), 0.7);
}

@media only screen and (max-width: 600px) {
  .header {
    font-size: 1.4em;
  }
}
</style>
