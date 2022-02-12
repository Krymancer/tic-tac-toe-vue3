<template>
  <Banner />
  <div class="game-view">
    <div class="game-container">
      <div class="header">
        <Turn />
      </div>
      <Board />
      <Scoreboard />
    </div>
  </div>
</template>

<script lang="ts">
import Board from "../components/Board.vue";
import Scoreboard from "../components/Scoreboard.vue";
import Turn from "../components/Turn.vue";
import Banner from "../components/Banner.vue";
export default {
  components: {
    Banner,
    Board,
    Scoreboard,
    Turn,
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  * {
    font-size: 0.8em;
  }

  .game-view {
    align-items: baseline !important;
    margin-top: 2em;
  }

  .game-container {
    justify-content: space-evenly;
  }
}

.game-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.header {
  padding: 0.5em;
}
</style>
