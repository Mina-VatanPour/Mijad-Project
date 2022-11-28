<template>
  <!-- Explore collection -->
  <section class="ex-collection section-padding">
    <div class="container">
      <!--      row : exploreCollection[0]-->
      <div class="row">
        <div class="col-12">
          <div class="section-header-left">
            <h3 class="text-light-black header-title title">
              {{ exploreBanners[0][0].title }}
            </h3>
          </div>
        </div>
      </div>
      <!--      row1 : exploreCollection[1]-->
      <div class="row">
        <div
          class="col-md-6"
          v-for="(row1, index) in exploreBanners[1]"
          :key="index"
        >
          <div class="ex-collection-box mb-xl-20">
            <img
              :src="require('@/assets/img/restaurants/540x300/' + row1.picName)"
              class="img-fluid full-width"
              alt="image"
            />
            <div class="category-type overlay padding-15">
              <a href="restaurant.html" class="category-btn">{{
                row1.labelTag
              }}</a>
            </div>
          </div>
        </div>
      </div>
      <!--      row2 : exploreCollection[2] ,  row3 : exploreCollection[3] -->
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="large-product-box mb-xl-20 p-relative">
            <img
              :src="
                require('@/assets/img/restaurants/255x587/' +
                  exploreBanners[2][0].picName)
              "
              class="img-fluid full-width"
              alt="image"
            />
            <div class="category-type overlay padding-15">
              <button class="category-btn">
                {{ exploreBanners[2][0].labelTag }}
              </button>
              <a
                href="restaurant.html"
                class="btn-first white-btn text-light-black fw-600 full-width"
                >دیدن همه</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-8">
          <!--      row3 : exploreCollection[3]-->
          <div class="row">
            <div
              class="col-lg-4 col-md-6 col-sm-6"
              v-for="(row3, index) in exploreBanners[3]"
              :key="index"
            >
              <div class="product-box mb-xl-20">
                <div class="product-img">
                  <a href="restaurant.html">
                    <img
                      :src="
                        require('@/assets/img/restaurants/255x150/' +
                          row3.picName)
                      "
                      class="img-fluid full-width"
                      alt="product-img"
                    />
                  </a>
                  <div class="overlay">
                    <div class="product-tags padding-10">
                      <span class="circle-tag">
                        <!-- تست روش سوم :-->
                        <img
                          :src="require('@/assets/img/svg/013-heart-1.svg')"
                        />
                      </span>
                      <span
                        class="type-tag bg-gradient-green text-custom-white"
                        v-if="row3.typeTag !== ''"
                      >
                        {{ row3.typeTag }}
                      </span>
                      <span
                        class="text-custom-white type-tag bg-gradient-orange"
                        v-if="row3.newShop !== ''"
                      >
                        {{ row3.newShop }}
                      </span>
                      <div class="custom-tag" v-if="row3.discount !== ''">
                        <span
                          class="text-custom-white rectangle-tag bg-gradient-red"
                        >
                          {{ row3.discount }}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-caption">
                  <div class="title-box">
                    <h6 class="product-title">
                      <a href="restaurant.html" class="text-light-black">
                        {{ row3.productTitle }}</a
                      >
                    </h6>
                    <div class="tags">
                      <span
                        class="text-custom-white rectangle-tag"
                        :class="changeBackgroundColor(row3.score)"
                      >
                        {{ row3.score }}
                      </span>
                    </div>
                  </div>
                  <p class="text-light-white">{{ row3.storeName }}</p>
                  <div class="product-details">
                    <div class="price-time">
                      <span class="text-light-black time"
                        >{{ row3.deliveryTime }} دقیقه</span
                      >
                      <span class="text-light-white price"
                        >{{ row3.price }} تومان</span
                      >
                    </div>
                    <div class="rating">
                      <span>
                        <i
                          v-for="n in 5"
                          class="fas fa-star"
                          :class="
                            n <= row3.score ? 'text-yellow' : 'text-muted'
                          "
                          :key="n"
                        ></i>
                      </span>
                      <span class="text-light-white text-right"
                        >{{ row3.scoreNumber }} امتیاز</span
                      >
                    </div>
                  </div>
                  <div class="product-footer">
                    <span class="text-custom-white square-tag" v-if="row3.leaf">
                      <img
                        :src="require('@/assets/img/svg/004-leaf.svg')"
                        alt="tag"
                      />
                    </span>
                    <span
                      class="text-custom-white square-tag"
                      v-if="row3.chili"
                    >
                      <img
                        :src="require('@/assets/img/svg/006-chili.svg')"
                        alt="tag"
                      />
                    </span>
                    <span class="text-custom-white square-tag" v-if="row3.chef">
                      <img
                        :src="require('@/assets/img/svg/005-chef.svg')"
                        alt="tag"
                      />
                    </span>
                    <span
                      class="text-custom-white square-tag"
                      v-if="row3.protein"
                    >
                      <img
                        :src="require('@/assets/img/svg/008-protein.svg')"
                        alt="tag"
                      />
                    </span>
                    <span
                      class="text-custom-white square-tag"
                      v-if="row3.lemon"
                    >
                      <img
                        :src="require('@/assets/img/svg/009-lemon.svg')"
                        alt="tag"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      row4 : exploreCollection[4]-->
      <div class="row">
        <div class="col-12">
          <div class="banner-adv2 mb-xl-20">
            <img
              :src="
                require('@/assets/img/restaurants/1110x100/' +
                  exploreBanners[4][0].picName)
              "
              class="img-fluid full-width"
              alt="banner"
            />
            <span class="text"
              >ارسال کاملا رایگان
              <img
                :src="require('@/assets/img/' + exploreBanners[4][0].tag)"
                alt="logo"
              />
              <a href="restaurant.html" class="btn-second btn-submit">{{
                exploreBanners[4][0].label
              }}</a></span
            >
            <span class="close-banner"></span>
            <div class="overlay overlay-bg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "ExploreCollection",
  setup: function () {
    const exploreBanners = reactive([
      // تیتر اکسپلور : exploreBanners[0]
      [
        {
          id: 1,
          title: "اکسپلور",
        },
      ],
      // row1 : exploreBanners[1]
      [
        {
          id: 1,
          picName: "collection-1.jpg",
          labelTag: "بالاترین رتبه",
        },
        {
          id: 2,
          picName: "collection-2.jpg",
          labelTag: "بالاترین رتبه",
        },
        // {
        //   id: 3,
        //   picName: 'collection-1.jpg',
        //   labelTag : 'بالاترین رتبه'
        // }
      ],
      // row2 :exploreBanners[2]
      [
        {
          id: 1,
          picName: "Banner-12.jpg",
          labelTag: "محبوب ترین ها در نزدیکی شما",
        },
      ],
      // row3 :exploreBanners[3]
      [
        {
          id: 1,
          picName: "shop-23.jpg",
          discount: 20,
          typeTag: "برترین",
          newShop: "",
          productTitle: "برگر خوب",
          score: 4,
          storeName: "ونک، فست فود",
          deliveryTime: "30-40",
          price: "100,000",
          scoreNumber: 4225,
          leaf: true,
          chili: true,
          chef: true,
          protein: true,
          lemon: true,
        },
        {
          id: 2,
          picName: "shop-2.jpg",
          discount: "",
          typeTag: "",
          newShop: "",
          productTitle: "صبحانه، نهار و شام خانگی",
          score: 2.1,
          storeName: "چاشت نو",
          deliveryTime: "40",
          price: "200,000",
          scoreNumber: 425,
          leaf: false,
          chili: true,
          chef: false,
          protein: true,
          lemon: false,
        },
        {
          id: 3,
          picName: "shop-3.jpg",
          discount: "",
          typeTag: "",
          newShop: "",
          productTitle: "پیتزا ایتالیایی",
          score: 3.2,
          storeName: "پرند",
          deliveryTime: "60-90",
          price: "260,000",
          scoreNumber: 625,
          leaf: false,
          chili: false,
          chef: true,
          protein: false,
          lemon: true,
        },
        {
          id: 4,
          picName: "shop-4.jpg",
          discount: "",
          typeTag: "",
          newShop: "",
          productTitle: "دسر و نوشیدنی",
          score: 3.2,
          storeName: "الگنت",
          deliveryTime: "45",
          price: "75,000",
          scoreNumber: 12,
          leaf: false,
          chili: false,
          chef: false,
          protein: false,
          lemon: true,
        },
        {
          id: 5,
          picName: "shop-5.jpg",
          discount: "",
          typeTag: "",
          newShop: "",
          productTitle: "سنتی",
          score: 4.5,
          storeName: "میجاد",
          deliveryTime: "60-90",
          price: "150,000",
          scoreNumber: 625,
          leaf: false,
          chili: false,
          chef: true,
          protein: false,
          lemon: true,
        },
        {
          id: 6,
          picName: "shop-6.jpg",
          discount: "",
          typeTag: "",
          newShop: "جدید",
          productTitle: "عصرانه",
          score: 2,
          storeName: "سران",
          deliveryTime: "60-90",
          price: "230,000",
          scoreNumber: 625,
          leaf: false,
          chili: false,
          chef: true,
          protein: false,
          lemon: true,
        },
      ],
      // row4 : exploreBanners[4]
      [
        {
          id: 1,
          picName: "vbanner-3.jpg",
          tag: "tag.jpg",
          label: "30 روز رایگان",
        },
      ],
    ]);

    function changeBackgroundColor(score) {
      if (score >= 4) {
        return "bg-green";
      } else if (score < 4 && score > 3) {
        return "bg-yellow";
      } else if (score <= 3) {
        return "bg-red";
      }
    }

    return {
      exploreBanners,
      changeBackgroundColor,
      // imgClicked:false,
    };
  },
};
</script>

<style scoped></style>
