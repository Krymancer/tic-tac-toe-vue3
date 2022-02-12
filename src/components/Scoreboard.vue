<template>
  <div class="score-board-container">
    <div class="score-board wins">
      <div class="title">X (YOU)</div>
      <div class="score">{{ wins }}</div>
    </div>
    <div class="score-board ties">
      <div class="title">TIES</div>
      <div class="score">{{ ties }}</div>
    </div>
    <div class="score-board loses">
      <div class="title">O (CPU)</div>
      <div class="score">{{ loses }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { useStore } from "../store";
export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  computed: {
    ...mapGetters({
      wins: "getWins",
      loses: "getLoses",
      ties: "getTies",
    }),
  },
};
</script>
<style scopped>
.score-board-container {
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
}

.score-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 4em;
  min-width: 8em;
  border-radius: 10px;
  padding: 0.4em;
  font-weight: bolder;
  color: rgb(var(--background));
}

.title {
  font-size: 1.2em;
}

.score {
  font-size: 2em;
}

.wins {
  background-color: rgb(var(--green));
}

.loses {
  background-color: rgb(var(--yellow));
}

.ties {
  background-color: rgb(var(--gray));
}
</style>
