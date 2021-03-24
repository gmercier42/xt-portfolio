import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import "simple-css-reset/reset.css";

createApp(App).use(router).mount("#app");
