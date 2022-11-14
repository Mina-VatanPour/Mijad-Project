import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/scss/bootstrap.scss";
import "@/assets/scss/main.scss";
createApp(App).use(store).use(router).mount("#app");
