import { createApp } from "vue";
import app from "./app.vue";
import router from "./router";
import "simple-css-reset/reset.css";

createApp(app).use(router).mount("#app");
