import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    player: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
