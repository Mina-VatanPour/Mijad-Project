<template>
  <section class="recent-order section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-header-left">
            <h3 class="text-light-black header-title title">
              سفارشات قبلی
              <span class="fs-12"
                ><a href="order-details.html">دیدن تمامی سفارشات</a></span
              >
            </h3>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-6 col-sm-6"
          v-for="(previousItem, index) in previousOrders"
          :key="index"
        >
          <div class="product-box mb-md-20">
            <div class="product-img">
              <a :href="previousItem.href">
                <img
                  :src="
                    require('@/assets/img/restaurants/255x104/' +
                      previousItem.imgName)
                  "
                  class="img-fluid full-width"
                  alt="product-img"
                />
              </a>
            </div>
            <div class="product-caption">
              <h6 class="product-title">
                <a :href="previousItem.href" class="text-light-black"
                  >{{ previousItem.title }}
                </a>
              </h6>
              <p class="text-light-white">{{ previousItem.storeName }}</p>
              <div class="product-btn">
                <a
                  href="order-details.html"
                  class="btn-first white-btn full-width text-light-green fw-600"
                  >سفارش</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PreviousOrder",
  setup() {
    const previousOrders = ref([
      {
        id: 1,
        href: "restaurant.html",
        imgName: "order-1.jpg",
        title: "پیتزا چیلی",
        storeName: "فست فود لقمه",
      },
      {
        id: 2,
        href: "restaurant.html",
        imgName: "order-2.jpg",
        title: "ساندویچ زاپاتا",
        storeName: "خوشمزه جات",
      },
      {
        id: 3,
        href: "restaurant.html",
        imgName: "order-3.jpg",
        title: "برگر",
        storeName: "جانبو",
      },
      {
        id: 4,
        href: "restaurant.html",
        imgName: "order-4.jpg",
        title: "بشقاب سبزیجات",
        storeName: "سبزینه",
      },
    ]);
    return { previousOrders };
  },
};
</script>

<style scoped></style>
