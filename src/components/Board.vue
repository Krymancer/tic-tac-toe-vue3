<template>
  <div class="board-container">
    <Cell :value="value[0]" :index="0" />
    <Cell :value="value[1]" :index="1" />
    <Cell :value="value[2]" :index="2" />
    <Cell :value="value[3]" :index="3" />
    <Cell :value="value[4]" :index="4" />
    <Cell :value="value[5]" :index="5" />
    <Cell :value="value[6]" :index="6" />
    <Cell :value="value[7]" :index="7" />
    <Cell :value="value[8]" :index="8" />
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { useStore } from "../store";
import Cell from "./Cell.vue";
export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: {
    Cell,
  },
  computed: {
    ...mapGetters({
      value: "getBoardValue",
    }),
  },
};
</script>
<style scoped>
.board-container {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);

  padding: 1em;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
}
</style>
