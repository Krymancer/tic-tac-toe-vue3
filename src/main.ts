import { createApp } from "vue";
import { store, key } from "./store";

import App from "./App.vue";
import "./style/global.css";

const app = createApp(App);
app.use(store, key);
app.mount("#app");
