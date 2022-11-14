<template>
  <div class="home">
    <HeaderView />
    <IndexView />
    <FooterView />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderView from "@/components/HeaderView.vue";
import IndexView from "@/views/site/index/IndexView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    HeaderView,
    IndexView,
    FooterView,
  },
};
</script>
