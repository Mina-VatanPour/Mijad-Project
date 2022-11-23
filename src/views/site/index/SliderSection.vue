<template>
  <section class="about-us-slider swiper-container p-relative">
    <Swiper
        :slides-per-view="1"
        :modules="modules"
        :autoplay="true"
        :navigation="true"
        :parallax="true"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(bannerItem, index) in bannersSlideItems" :key="index">
        <img
            :src="require('@/assets/img/about/blog/1920x700/' + bannerItem.imgName)"
            class="img-fluid full-width"
            alt="Banner"
        />
        <div class="transform-center">
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-lg-12 align-self-center">
                <div class="right-side-content text-center">
                  <h1 class="text-custom-white fw-600">
                    {{ bannerItem.title }}
                  </h1>
                  <h3 class="text-custom-white fw-400">
                    {{ bannerItem.description }}
                  </h3>
                  <a :href="bannerItem.href" class="btn-second btn-submit"
                  >بیشتر بدانید</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay overlay-bg"></div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import {ref} from "vue";
import {Autoplay, Navigation, Parallax} from "swiper";
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/parallax";

export default {
  name: "SliderSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const bannersSlideItems = ref([
      {
        id: 1,
        imgName: "banner-1.jpg",
        title: " بهترین تجربه خرید آنلاین غذا",
        description: " با بزرگترین پلتفرم سفارش غذا",
        href: "restaurant.html",
      },
      {
        id: 2,
        imgName: "banner-2.jpg",
        title: " بهترین تجربه خرید آنلاین غذا",
        description: " با بزرگترین پلتفرم سفارش غذا",
        href: "restaurant.html",
      },
      {
        id: 3,
        imgName: "banner-3.jpg",
        title: " بهترین تجربه خرید آنلاین غذا",
        description: " با بزرگترین پلتفرم سفارش غذا",
        href: "restaurant.html",
      },
    ]);
    // init Swiper slider for Banners
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      bannersSlideItems, onSwiper, onSlideChange, modules: [Autoplay, Navigation, Parallax]
    };
  },
};
</script>

<style scoped></style>
