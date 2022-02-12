<template>
  <div class="switch-container" @click="onClick">
    <div class="switch-select" :class="position"></div>
    <XMark class="mark" :width="60" :height="60" :fill="xcolor" />
    <OMark class="mark" :height="60" :width="60" :fill="ocolor" />
  </div>
</template>

<script lang="ts">
import { useStore } from "../store";

// Components
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
  data() {
    return {
      state: true,
    };
  },
  methods: {
    onClick() {
      this.state = !this.state;
      this.store.commit("toogleMarker", this.state);
    },
  },
  computed: {
    xcolor(): string {
      return this.state ? "rgb(var(--background))" : "rgb(var(--yellow))";
    },
    ocolor(): string {
      return this.state ? "rgb(var(--yellow))" : "rgb(var(--background))";
    },
    position(): string {
      return this.state ? "select-left" : "select-right";
    },
  },
};
</script>

<style scoped>
.switch-container {
  background-color: rgb(var(--background));
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  width: 18em;
  height: 6em;

  cursor: pointer;
}
.switch-select {
  display: flex;
  position: absolute;
  z-index: 1;
  background: rgb(var(--green));
  height: 90%;
  width: 50%;
  border-radius: 10px;
  transition: all 0.2s linear;
  justify-self: flex-end;
}

.select-left {
  left: 0.4em;
}

.select-right {
  left: calc(50% - 0.4em);
}

.mark {
  z-index: 2;
  transition: all 0.4s linear;
}
</style>
