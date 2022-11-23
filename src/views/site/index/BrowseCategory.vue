<template>
  <section class="browse-cat u-line section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-header-left">
            <h3 class="text-light-black header-title title">
              بر اساس نوع<span class="fs-12"
                ><a href="restaurant.html">دیدن همه</a></span
              >
            </h3>
          </div>
        </div>
        <div class="col-12">
          <div class="category-slider swiper-container">
            <Swiper
              :breakpoints="breakpoints"
              :modules="modules"
              :autoplay="true"
              :navigation="true"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <SwiperSlide
                v-for="(catItem, index) in browseCatSlider"
                :key="index"
              >
                <a href="#" class="categories">
                  <div class="icon text-custom-white bg-light-green">
                    <img
                      :src="
                        require('@/assets/img/restaurants/125x125/' +
                          catItem.imgName)
                      "
                      class="rounded-circle"
                      alt="categories"
                    />
                  </div>
                  <span class="text-light-black cat-name">{{
                    catItem.catName
                  }}</span>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Autoplay, Navigation, Parallax } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/parallax";

export default {
  name: "CategorySection",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const browseCatSlider = ref([
      {
        id: 1,
        href: "restaurant.html",
        catName: "ایتالیایی",
        imgName: "cuisine-1.jpg",
      },
      {
        id: 2,
        href: "restaurant.html",
        catName: "تایوانی",
        imgName: "cuisine-2.jpg",
      },
      {
        id: 3,
        href: "restaurant.html",
        catName: "چینی",
        imgName: "cuisine-3.jpg",
      },
      {
        id: 4,
        href: "restaurant.html",
        catName: "مکزیکی",
        imgName: "cuisine-4.jpg",
      },
      {
        id: 5,
        href: "restaurant.html",
        catName: "هندی",
        imgName: "cuisine-5.jpg",
      },
      {
        id: 6,
        href: "restaurant.html",
        catName: "لبنانی",
        imgName: "cuisine-6.jpg",
      },
      {
        id: 7,
        href: "restaurant.html",
        catName: "ژاپنی",
        imgName: "cuisine-7.jpg",
      },
      {
        id: 8,
        href: "restaurant.html",
        catName: "عربی",
        imgName: "cuisine-8.jpg",
      },
      {
        id: 9,
        href: "restaurant.html",
        catName: "ایرانی",
        imgName: "cuisine-8.jpg",
      },
      {
        id: 10,
        href: "restaurant.html",
        catName: "فرانسوی",
        imgName: "cuisine-8.jpg",
      },
    ]);
    // init Swiper slider for Browse by Category
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      browseCatSlider,
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation, Parallax],
      breakpoints: {
        992: {
          slidesPerView: 7,
        },
        768: {
          slidesPerView: 4,
        },
      },
    };
  },
};
</script>

<style scoped></style>
