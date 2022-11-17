import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/scss/bootstrap.scss";

import "@/assets/scss/main.scss";

import "@/assets/css/responsive.css";

import "font-awesome/css/font-awesome.css";


// import "ion-slider-range/ionicSliderRange.css";
// import "ion-slider-range/ionicSliderRange";

import "magnific-popup/dist/magnific-popup.css";
// import "magnific-popup/dist/jquery.magnific-popup";

import "nice-select2/dist/css/nice-select2.css";
import "nice-select2/dist/js/nice-select2";

import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.js";

createApp(App).use(store).use(router).mount("#app");
