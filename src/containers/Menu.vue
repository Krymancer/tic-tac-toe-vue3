<template>
  <div class="menu-view">
    <div class="menu-container">
      <div>
        <XMark :width="100" :height="100" />
        <OMark :width="100" :height="100" />
      </div>
      <SelectMark @marker="handleMarker" />
      <!--<Button text="NEW GAME (VS CPU)" type="secondary" @click="vsCPU" /> -->
      <Button text="NEW GAME (VS PLAYER)" type="tertiary" @click="vsPlayer" />
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../components/Button.vue";
import SelectMark from "../components/SelectMark.vue";
import XMark from "../components/XMark.vue";
import OMark from "../components/OMark.vue";
import { useStore } from "../store";
export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      player: true,
    };
  },
  components: {
    Button,
    SelectMark,
    XMark,
    OMark,
  },
  methods: {
    handleMarker(value: boolean) {
      this.player = value;
    },
    vsPlayer() {
      this.store.commit("setGameState", "playing");
      this.store.commit("setOponent", false);
    },
    vsCPU() {
      this.store.commit("setGameState", "playing");
      this.store.commit("setOponent", true);
    },
  },
};
</script>
<style scoped>
.menu-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40em;
  width: 30em;
}

@media only screen and (max-width: 600px) {
  .menu-container {
    width: 20em;
  }
}
</style>
