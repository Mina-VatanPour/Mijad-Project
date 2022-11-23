<template>
  <!-- footer-top -->
  <div class="footer-top">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          class="col-md-2 col-sm-4 col-6 mb-sm-20"
          v-for="(iconBox, index) in iconsBoxes"
          :key="index"
        >
          <div class="icon-box">
            <span class="text-light-green">
              <i :class="iconBox.iconClass"></i>
            </span>
            <span class="text-custom-white mb-2">
              {{ iconBox.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <footer class="section-padding pt-0 u-line">
    <div class="u-line instagram-slider swiper-container">
      <!-- instagram slider  -->
      <Swiper
        :slides-per-view="5"
        :space-between="5"
        :modules="modules"
        :autoplay="true"
        :zoom="true"
        :loop="true"
        effect="coverflow"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(instagramSwiperSlide, index) in instagramSwiperSlides"
          :key="index"
        >
          <a :href="instagramSwiperSlide.href"
            ><img
              :src="
                require('@/assets/img/restaurants/250x200/' +
                  instagramSwiperSlide.imgName)
              "
              alt="instagram"
          /></a>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-xl col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center"
        >
          <div class="footer-links">
            <h6 class="text-custom-white">سوالات متداول</h6>
            <ul>
              <li>
                <a href="#" class="text-light-white fw-600">جزییات اکانت</a>
              </li>
              <li>
                <a href="#" class="text-light-white fw-600">تاریخچه سفارشات</a>
              </li>
              <li>
                <a href="#" class="text-light-white fw-600"
                  >پیدا کردن رستوران</a
                >
              </li>
              <li><a href="#" class="text-light-white fw-600">ورود</a></li>
              <li><a href="#" class="text-light-white fw-600">سفارش</a></li>
            </ul>
          </div>
        </div>
        <div
          class="col-xl col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center"
        >
          <div class="footer-links">
            <h6 class="text-custom-white">درباره ما</h6>
            <ul>
              <li><a href="#" class="text-light-white fw-600">درباره ما</a></li>
              <li><a href="#" class="text-light-white fw-600">بلاگ</a></li>
              <li>
                <a href="#" class="text-light-white fw-600">شبکه اجتماعی</a>
              </li>
              <li><a href="#" class="text-light-white fw-600">مانچ‌باکس</a></li>
              <li>
                <a href="#" class="text-light-white fw-600">لینک مرتبط</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-xl col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center"
        >
          <div class="footer-links">
            <h6 class="text-custom-white">همکاری با ما</h6>
            <ul>
              <li><a href="#" class="text-light-white fw-600">پیشنهاد</a></li>
              <li>
                <a href="#" class="text-light-white fw-600">ثبت رستوران</a>
              </li>
              <li>
                <a href="#" class="text-light-white fw-600">ساخت اکانت</a>
              </li>
              <li><a href="#" class="text-light-white fw-600">راهنمایی</a></li>
            </ul>
          </div>
        </div>
        <div
          class="col-xl col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center"
        >
          <div class="footer-links">
            <h6 class="text-custom-white">دانلود اپلیکیشن</h6>
            <div class="appimg">
              <a href="#">
                <img
                  :src="require('@/assets/img/playstore.jpg')"
                  class="img-fluid"
                  alt="app logo"
                />
              </a>
            </div>
            <div class="appimg">
              <a href="#">
                <img
                  :src="require('@/assets/img/appstore.jpg')"
                  class="img-fluid"
                  alt="app logo"
                />
              </a>
            </div>
          </div>
        </div>
        <!--        <div class="col-xl col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center ">-->
        <!--        <div class="footer-contact">-->
        <!--          <h6 class="text-custom-white">خبرنامه</h6>-->
        <!--          <form class="subscribe_form">-->
        <!--            <div class="input-group">-->
        <!--              <input type="text" class="form-control form-control-submit" name="email"-->
        <!--                     placeholder="ایمیل خود را وارد نمایید">-->
        <!--              <span class="input-group-btn">-->
        <!--                                    <button class="btn btn-second btn-submit" type="button"><i-->
        <!--                                        class="fas fa-paper-plane"></i></button>-->
        <!--                                </span>-->
        <!--            </div>-->
        <!--          </form>-->
        <!--        </div>-->
        <!--        </div>-->

        <!--        <div class="col-sm-12 d-flex justify-content-end">-->
        <div class="col-md-12">
          <div class="ft-social-media">
            <h6 class="text-center text-light">ما را دنبال کنید</h6>
            <ul>
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- copyright-->
  <div class="copyright">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <div class="payment-logo mb-md-20">
            <span class="text-light-white fs-14 mr-3"
              >پشتبانی تمام کارت های بانکی</span
            >
            <div class="payemt-icon">
              <img
                :src="require('@/assets/img/card-front.jpg')"
                class="mx-1"
                alt="#"
              />
              <img
                :src="require('@/assets/img/visa.jpg')"
                class="mx-1"
                alt="#"
              />
              <img
                :src="require('@/assets/img/amex-card-front.png')"
                class="mx-1"
                alt="#"
              />
              <img
                :src="require('@/assets/img/mastercard.png')"
                class="mx-1"
                alt="#"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center medewithlove align-self-center">
          <a href="#" class="text-custom-white"
            >ساخته شده با <i class="fas fa-heart"></i>
          </a>
        </div>
        <div class="col-lg-4">
          <div class="copyright-text">
            <span class="text-light-white"
              >©
              <a href="#" class="text-light-white">میجاد :) </a>
              1401 | تمامی حقوق محفوظ است</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Autoplay, EffectCoverflow, Zoom } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/zoom";

export default {
  name: "FooterView",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const iconsBoxes = ref([
      {
        id: 1,
        iconClass: "flaticon-credit-card-1",
        title: "پرداخت ایمن",
      },
      {
        id: 2,
        iconClass: "flaticon-wallet-1",
        title: "انواع پرداخت",
      },
      {
        id: 3,
        iconClass: "flaticon-help",
        title: "7 روز پشتیبانی 24 ساعته",
      },
      {
        id: 4,
        iconClass: "flaticon-truck",
        title: "ارسال رایگان",
      },
      {
        id: 5,
        iconClass: "flaticon-guarantee",
        title: "تضمین بهترین قیمت",
      },
      {
        id: 6,
        iconClass: "flaticon-app-file-symbol",
        title: "اپلیکیشن اندروید و آیفون",
      },
    ]);
    const instagramSwiperSlides = ref([
      {
        id: 1,
        imgName: "insta-1.jpg",
        href: "#",
      },
      {
        id: 2,
        imgName: "insta-2.jpg",
        href: "#",
      },
      {
        id: 3,
        imgName: "insta-3.jpg",
        href: "#",
      },
      {
        id: 4,
        imgName: "insta-4.jpg",
        href: "#",
      },
      {
        id: 5,
        imgName: "insta-5.jpg",
        href: "#",
      },
      {
        id: 6,
        imgName: "insta-6.jpg",
        href: "#",
      },
      {
        id: 7,
        imgName: "insta-7.jpg",
        href: "#",
      },
      {
        id: 8,
        imgName: "insta-8.jpg",
        href: "#",
      },
      {
        id: 9,
        imgName: "insta-4.jpg",
        href: "#",
      },
      {
        id: 10,
        imgName: "insta-5.jpg",
        href: "#",
      },
    ]);
    // init Swiper slider for instagram slider
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      iconsBoxes,
      instagramSwiperSlides,
      onSwiper,
      onSlideChange,
      modules: [Autoplay, EffectCoverflow, Zoom],
    };
  },
};
</script>

<style scoped>
.section-padding {
  padding: 60px 0;
}
</style>
