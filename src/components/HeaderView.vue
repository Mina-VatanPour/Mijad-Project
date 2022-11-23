<template>
  <!-- Navigation -->
  <div class="header shadow-lg pt-3 pb-1">
    <header class="full-width">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mainNavCol">
            <!-- logo -->
            <div class="logo mainNavCol p-3">
              <router-link
                  :to="{ name: 'home' }"
                  class="d-flex justify-content-center"
              >
                <img
                    :src="require('@/assets/img/my-logo.png')"
                    class="img-fluid w-50"
                    alt="Logo"
                />
              </router-link>
            </div>
            <!-- logo -->
            <div class="main-search mainNavCol pt-2">
              <form class="main-search search-form full-width">
                <div class="row">
                  <!-- location picker -->
                  <!--                  <div class="col-lg-6 col-md-4">-->
                  <!--                    <a-->
                  <!--                      href="#"-->
                  <!--                      class="delivery-add p-relative"-->
                  <!--                      @click="toggleClass = !toggleClass"-->
                  <!--                      :class="{ open: toggleClass }"-->
                  <!--                    >-->
                  <!--                      <span class="icon"-->
                  <!--                        ><i class="fas fa-map-marker-alt"></i-->
                  <!--                      ></span>-->
                  <!--                      <span class="address">تهران- ونک- گلابدره</span>-->
                  <!--                      <div-->
                  <!--                        class="location-picker"-->
                  <!--                        @click="toggleClass = !toggleClass"-->
                  <!--                        :class="{ open: toggleClass }"-->
                  <!--                      >-->
                  <!--                        <input-->
                  <!--                          type="text"-->
                  <!--                          class="form-control rounded shadow-sm"-->
                  <!--                          placeholder="آدرس جدید وارد نمایید"-->
                  <!--                        />-->
                  <!--                      </div>-->
                  <!--                    </a>-->
                  <!--                  </div>-->
                  <!-- location picker -->
                  <!-- search -->
                  <div class="col-lg-6 col-md-8">
                    <div class="search-box padding-10">
                      <input
                          type="text"
                          class="form-control border rounded shadow-sm"
                          placeholder=" جستجو کنید ( پیتزا، کباب و ... )"
                      />
                    </div>
                  </div>
                  <!-- search -->
                </div>
              </form>
            </div>

            <div class="right-side fw-700 mainNavCol">
              <!--              <div class="gem-points fw-bold">-->
              <!--                <a href="#">-->
              <!--                  <i class="fas fa-concierge-bell"></i>-->
              <!--                  <span>سفارش غذا</span>-->
              <!--                </a>-->
              <!--              </div>-->
              <div class="catring parent-megamenu fw-bold">
                <a href="#" @click="showPages = !showPages">
                  <span class="fw-bold"
                  >صفحات<i class="fas fa-caret-down me-2"></i
                  ></span>
                  <i class="fas fa-bars"></i>
                </a>
                <div
                    class="megamenu mt-md-3"
                    :class="{ show: showPages }"
                >
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-lg-4 col-md-5">
                          <div class="ex-collection-box h-100">
                            <a href="#">
                              <img
                                  :src="require('@/assets/img/nav-1.jpg')"
                                  class="img-fluid full-width h-100"
                                  alt="image"
                              />
                            </a>
                            <div class="category-type overlay padding-15">
                              <a href="restaurant.html" class="category-btn"
                              >بالاترین رتبه</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-7">
                          <div class="row">
                            <div
                                class="col-lg-3 col-sm-6"
                                v-for="(menuTitle, index) in menuTitles"
                                :key="index"
                            >
                              <div class="menu-style">
                                <div class="menu-title">
                                  <h6 class="cat-name">
                                    <a href="#" class="text-light-black">{{
                                        menuTitle.catName
                                      }}</a>
                                  </h6>
                                </div>
                                <ul>
                                  <li
                                      v-for="(li, index) in menuTitle.lis"
                                      :key="index"
                                  >
                                    <a
                                        :href="li.href"
                                        class="text-light-white fw-500"
                                    >{{ li.title }}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- mobile search -->
              <div class="mobile-search">
                <a href="#" data-bs-toggle="modal" data-bs-target="#search-box">
                  <i class="fas fa-search"></i>
                </a>
              </div>
              <!--   <SearchBox/>    رو اینجا اگه قرار بدی درست کار نمیکنه پس بردمش تو فایل IndexView  -->
              <!-- mobile search -->
              <!-- user account -->
              <div class="user-details p-relative">
                <a href="#" class="text-light-white fw-500" @click="showDetail = !showDetail">
                  <img
                      :src="require('@/assets/img/user-1.png')"
                      class="rounded-circle"
                      alt="userimg"
                  />
                  <span>سلام، مینا</span>
                </a>
                <div class="user-dropdown rounded shadow-sm" :class="{show : showDetail}">
                  <ul class="pt-sm-0">
                    <li
                        v-for="(userItem, index) in userDetailsDropdown"
                        :key="index"
                    >
                      <a :href="userItem.href">
                        <div class="icon"><i :class="userItem.icon"></i></div>
                        <span class="details">{{ userItem.title }}</span>
                      </a>
                    </li>
                  </ul>
                  <div class="user-footer">
                    <span class="text-light-black"></span> <a href="#">خروج</a>
                  </div>
                </div>
              </div>
              <!-- user notification -->
              <div class="cart-btn notification-btn">
                <a href="#" class="text-light-green fw-700">
                  <i class="fas fa-bell"></i>
                  <span class="user-alert-notification"></span>
                </a>
                <div
                    class="notification-dropdown rounded shadow-sm"
                    v-for="(productDetail, index) in notificationsDetail"
                    :key="index"
                >
                  <div class="product-detail">
                    <a :href="productDetail.href">
                      <div class="img-box">
                        <img
                            :src="
                            require('@/assets/img/' + productDetail.picture)
                          "
                            class="rounded"
                            alt="image"
                        />
                      </div>
                      <div class="product-about">
                        <p class="text-light-black">
                          {{ productDetail.aboutTitle }}
                        </p>
                        <p class="text-light-white">
                          {{ productDetail.aboutDescription }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="rating-box">
                    <p class="text-light-black">سفارش آخرتان چطور بود؟.</p>
                    <span class="text-dark-white"
                    ><i class="fas fa-star"></i
                    ></span>
                    <span class="text-dark-white"
                    ><i class="fas fa-star"></i
                    ></span>
                    <span class="text-dark-white"
                    ><i class="fas fa-star"></i
                    ></span>
                    <span class="text-dark-white"
                    ><i class="fas fa-star"></i
                    ></span>
                    <span class="text-dark-white"
                    ><i class="fas fa-star"></i
                    ></span>
                    <cite class="text-light-white">{{
                        productDetail.date
                      }}</cite>
                  </div>
                </div>
              </div>
              <!-- user notification -->
              <!-- user cart -->
              <div class="cart-btn cart-dropdown">
                <a
                    href="#"
                    class="text-light-green fw-700"
                    @click="showCard = !showCard"
                >
                  <i class="fas fa-shopping-bag"></i>
                  <span class="user-alert-cart">{{
                      cartsDetailBoxes.length
                    }}</span>
                </a>
                <div
                    class="cart-detail-box shadow-sm px-2"
                    :class="{ show: showCard }"
                >
                  <div class="card">
                    <div class="card-header padding-15">سبد خرید</div>
                    <div class="card-body no-padding">
                      <div
                          class="cat-product-box"
                          v-for="(detailBox, index) in cartsDetailBoxes"
                          :key="index"
                      >
                        <div class="cat-product">
                          <div class="cat-name">
                            <a :href="detailBox.href">
                              <p class="text-light-green">
                                <span class="text-dark-white">{{
                                    detailBox.number
                                  }}</span>
                                {{ detailBox.title }}
                              </p>
                              <span class="text-light-white">{{
                                  detailBox.restaurantName
                                }}</span>
                            </a>
                          </div>
                          <div class="delete-btn">
                            <a href="#" class="text-dark-white">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                          <div class="price">
                            <a href="#" class="text-dark-white fw-500">
                              {{ detailBox.price }} تومان
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="item-total">
                        <div class="total-price border-0">
                          <span class="text-dark-white fw-700">جمع خرید:</span>
                          <span class="text-dark-white fw-700">
                            چجوری باید داینامیک شه؟ تومان</span
                          >
                        </div>
                        <div class="empty-bag padding-15">
                          <a href="#">خالی کردن سبد</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer padding-15">
                      <a
                          href="checkout.html"
                          class="btn-first green-btn text-custom-white full-width fw-500"
                      >ادامه خرید</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- user cart -->
            </div>
          </div>
          <!-- about location and change address in modal state of mobile-->
          <!--          <div class="col-sm-12 mobile-search">-->
          <!--            <div class="mobile-address mb-2">-->
          <!--              <a-->
          <!--                  href="#"-->
          <!--                  class="delivery-add"-->
          <!--                  data-bs-toggle="modal"-->
          <!--                  data-bs-target="#address-box"-->
          <!--              >-->
          <!--                <span class="address">تهران- ونک- گلابدره</span>-->
          <!--              </a>-->
          <!--            </div>-->
          <!--            <div class="sorting-addressbox">-->
          <!--                        <span class="full-address text-light-green"-->
          <!--                        >تهران- ونک- گلابدره</span-->
          <!--                        >-->
          <!--              <div class="btns d-flex">-->
          <!--                <div class="filter-btn">-->
          <!--                  <button type="button">-->
          <!--                    <i class="fas fa-sliders-h text-light-green fs-18"></i>-->
          <!--                  </button>-->
          <!--                  <span class="text-light-green">چیدن بر اساس</span>-->
          <!--                </div>-->
          <!--                <div class="filter-btn">-->
          <!--                  <button type="button">-->
          <!--                    <i class="fas fa-filter text-light-green fs-18"></i>-->
          <!--                  </button>-->
          <!--                  <span class="text-light-green">فیلتر</span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <AddressBox/>-->
        </div>
      </div>
    </header>
  </div>
  <div class="main-sec"></div>
</template>

<script>
import {ref} from "vue";
// import AddressBox from "@/components/modal-boxes/AddressBox";

export default {
  name: "HeaderView",
  components: {
    // AddressBox,
  },
  setup() {
    // let toggleClass= false;
    let showPages = ref(false);
    let showDetail = ref(false);
    let showCard = ref(false);
    const menuTitles = ref([
      {
        id: 1,
        catName: "صفحات اصلی",
        lis: [
          {
            href: "index.html",
            title: "لندینگ پیج",
          },
          {
            href: "homepage-1.html",
            title: "صفحه اصلی 1",
          },
          {
            href: "homepage-2.html",
            title: "صفحه اصلی 2",
          },
          {
            href: "homepage-3.html",
            title: "صفحه اصلی 3",
          },
          {
            href: "homepage-4.html",
            title: "صفحه اصلی 4",
          },
        ],
      },
      {
        id: 2,
        catName: "صفات داخلی",
        lis: [
          {
            href: "blog.html",
            title: "وبلاگ 1",
          },
          {
            href: "blog-style-2.html",
            title: "وبلاگ 2",
          },
          {
            href: "blog-details.html",
            title: "صفحه جزئیات وبلاگ",
          },
          {
            href: "ex-deals.html",
            title: "سفارشات قبلی",
          },
          {
            href: "about.html",
            title: "درباره ما",
          },
        ],
      },
      {
        id: 3,
        catName: "افزودن فروشگاه (رستوران)",
        lis: [
          {
            href: "restaurant.html",
            title: "فروشگاه (رستوران)",
          },
          {
            href: "restaurant-style-1.html",
            title: "فروشگاه 1 (رستوران 1)",
          },
          {
            href: "restaurant-style-2.html",
            title: "فروشگاه 2 (رستوران 2)",
          },
          {
            href: 'add-restaurant.html"',
            title: "افزودن فروشگاه (افزودن رستوران)",
          },
          {
            href: "list-view.html",
            title: "مشاهده لیست فروشگاه ها (رستورانها)",
          },
        ],
      },
      {
        id: 4,
        catName: "صفحات کاربردی",
        lis: [
          {
            href: "login.html",
            title: "ورود",
          },
          {
            href: "register.html",
            title: "ثبت نام",
          },
          {
            href: "checkout.html",
            title: "خرید",
          },
          {
            href: "order-details.html",
            title: "جزئیات خرید",
          },
          {
            href: "geo-locator.html",
            title: "اطراف من",
          },
        ],
      },
    ]);
    const userDetailsDropdown = ref([
      {
        id: 1,
        href: "order-details.html",
        icon: "flaticon-rewind",
        title: "سفارش های قبلی",
      },
      {
        id: 2,
        href: "order-details.html",
        icon: "flaticon-takeaway",
        title: "سفارش فعلی",
      },
      {
        id: 3,
        href: "#",
        icon: "flaticon-breadbox",
        title: "مورد علاقه",
      },
      {
        id: 4,
        href: "#",
        icon: "flaticon-gift",
        title: "کد تخفیف",
      },
      {
        id: 5,
        href: "#",
        icon: "flaticon-refer",
        title: "دعوت از دوستان",
      },
      {
        id: 6,
        href: "#",
        icon: "flaticon-diamond",
        title: "پلن",
      },
      {
        id: 7,
        href: "#",
        icon: "flaticon-user",
        title: "صفحه شخصی",
      },
      {
        id: 8,
        href: "#",
        icon: "flaticon-board-games-with-roles",
        title: "راهنمایی",
      },
    ]);
    const notificationsDetail = ref([
      {
        id: 1,
        href: "#",
        picture: "shop-1.png",
        aboutTitle: "فست فود فیله",
        aboutDescription: "فست فود ایتالیایی",
        date: "سه روز پیش",
      },
    ]);
    const cartsDetailBoxes = ref([
      {
        id: 1,
        href: "#",
        number: "2",
        title: "ساندویچ زاپاتا",
        restaurantName: "فست فود خوشمزه",
        price: "35000",
      },
      {
        id: 2,
        href: "#",
        number: "1",
        title: "چیپس و پنیر",
        restaurantName: "فست فود خوشمزه",
        price: "25000",
      },
      {
        id: 3,
        href: "#",
        number: "1",
        title: "ساندویچ مرغ",
        restaurantName: "فست فود خوشمزه",
        price: "45000",
      },
    ]);
    return {
      // toggleClass,
      showPages,
      showDetail,
      showCard,
      menuTitles,
      userDetailsDropdown,
      notificationsDetail,
      cartsDetailBoxes,
    };
  },
};
</script>

<style scoped></style>
