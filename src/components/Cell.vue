<template>
  <div class="cell-container" @click="onClick">
    <XMark width="7em" height="8em" v-if="showXMark" />
    <OMark width="7em" height="7em" v-if="showOMark" />
  </div>
</template>
<script lang="ts">
import { useStore } from "../store";
import { mapGetters } from "vuex";
import { checkWin, checkTie } from "../util/checkWin";
import { makeAIMove } from "../util/gameAI";

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
  props: {
    value: {
      type: String,
      default: "-",
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters({
      turn: "getTurn",
      player: "getPlayer",
      board: "getBoardValue",
      gameState: "getGameState",
      oponent: "getOpponent",
    }),
    showXMark() {
      return this.value === "X";
    },
    showOMark() {
      return this.value === "O";
    },
  },
  methods: {
    onClick(): any {
      if (this.value !== "-" || this.gameState !== "playing") {
        return;
      }

      const move = this.turn ? "X" : "O";
      this.store.commit("makeMove", { index: this.index, value: move });

      if (checkWin(this.board, !this.turn ? "X" : "O")) {
        this.store.commit("setGameState", !this.turn ? "win" : "lose");
        return;
      }

      if (checkTie(this.board)) {
        this.store.commit("setGameState", "tie");
        return;
      }
    },
  },
};
</script>
<style scoped>
.cell-container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10em;
  width: 10em;

  border-radius: 10px;
  background-color: rgb(var(--primary));
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
}
</style>
