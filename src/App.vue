<template>
  <Menu v-if="isMenu" />
  <Game v-if="isPlaying" />
</template>

<script lang="ts">
import Menu from "./containers/Menu.vue";
import Game from "./containers/Game.vue";
import { useStore } from "./store";
import { mapGetters } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: {
    Menu,
    Game,
  },
  computed: {
    ...mapGetters({
      gameState: "getGameState",
    }),
    isMenu(): boolean {
      return this.gameState === "menu";
    },
    isPlaying(): boolean {
      return this.gameState !== "menu";
    },
  },
};
</script>

<style>
body {
  background-color: rgb(var(--background));
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
