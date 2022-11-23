import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// read from node-modules
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/scss/bootstrap.scss";
// read from src
import "@/assets/css/font-awesome.css";
import "@/assets/css/font/flaticon.css";
import "@/assets/scss/main.scss";
import "@/assets/css/responsive.css";

createApp(App).use(store).use(router).mount("#app");
