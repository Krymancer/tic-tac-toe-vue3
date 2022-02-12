<template>
  <div class="banner-view" v-if="isBannerVisible">
    <div class="banner-container">
      <div class="winner">{{ winnerText }}</div>
      <div class="takes-the-round">
        <XMark width="100" height="100" v-if="isXwinner" />
        <OMark width="100" height="100" v-if="isOwinner" />
        <div class="tie" v-if="isTie">NOBODY TAKES THE ROUND!</div>
        <div v-else :class="gameState">TAKES THE ROUND!</div>
      </div>
      <div class="buttons">
        <Button text="QUIT" type="cancel" class="quit-btn" @click="onQuit" />
        <Button
          text="NEXT ROUND"
          type="secondary"
          class="next-btn"
          @click="onNextRound"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../components/Button.vue";
import XMark from "../components/XMark.vue";
import OMark from "../components/OMark.vue";
import { useStore } from "../store";
import { mapGetters } from "vuex";
export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: {
    Button,
    XMark,
    OMark,
  },
  computed: {
    ...mapGetters({
      gameState: "getGameState",
    }),
    winnerText() {
      if (this.gameState === "win") return "YOU WIN!";
      if (this.gameState === "lose") return "YOU LOSE!";
      if (this.gameState === "tie") return "IT'S A TIE!";
    },
    isXwinner(): boolean {
      return this.gameState === "win";
    },
    isOwinner(): boolean {
      return this.gameState === "lose";
    },
    isTie(): boolean {
      return this.gameState === "tie";
    },
    isBannerVisible(): boolean {
      return this.isXwinner || this.isOwinner || this.isTie;
    },
  },
  methods: {
    onQuit() {
      this.store.commit("quitGame");
    },
    onNextRound() {
      this.store.commit("resetGame");
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .banner-container {
    height: 100vh !important;
  }

  .takes-the-round {
    flex-direction: column !important;
  }

  .buttons {
    width: 100% !important;
  }
}

.banner-view {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(var(--primary));
  width: 100%;
  height: 15em;
  color: rgb(var(--gray));
  padding: 1em;
}

.winner {
  font-size: 2em;
  font-weight: 700;
}

.win {
  color: rgb(var(--green));
}

.lose {
  color: rgb(var(--yellow));
}

.tie {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(var(--gray));
}

.takes-the-round {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: 600;
}

.takes-the-round > div {
  margin: 0.5em;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  padding: 1em;
}

.quit-btn {
  width: 5em;
}

.next-btn {
  width: 8em;
}
</style>
