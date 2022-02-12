<template>
  <div class="turn-container">
    <div class="turn-mark">
      <XMark v-if="isXturn" fill="rgb(var(--gray))" />
      <OMark v-else fill="rgb(var(--gray))" />
    </div>
    <div class="turn-tex">TURN</div>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { useStore } from "../store";
import XMark from "./XMark.vue";
import OMark from "./OMark.vue";
export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: {
    XMark,
    OMark,
  },
  computed: {
    ...mapGetters({
      turn: "getTurn",
    }),
    isXturn(): boolean {
      return this.turn;
    },
  },
};
</script>
<style scopped>
.turn-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 10px;
  background-color: rgb(var(--primary));

  color: rgb(var(--gray));
  font-size: 2.5em;
  font-weight: 800;
  padding: 0.4em;
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25);
}

.turn-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.3em;
}
</style>
