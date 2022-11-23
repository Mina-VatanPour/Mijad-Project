<template>
  <HeaderView />
  <SliderSection />
  <BrowseCategory />
<!--  <PreviousOrder />-->
  <ExploreCollection />
  <FooterView />
  <!--  <AddressBox />-->
  <SearchBox />
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import SliderSection from "@/views/site/index/SliderSection";
import BrowseCategory from "@/views/site/index/BrowseCategory";
import PreviousOrder from "@/views/site/index/PreviousOrder";
import ExploreCollection from "@/views/site/index/ExploreCollection";
import FooterView from "@/components/FooterView.vue";
// import AddressBox from "@/components/modal-boxes/AddressBox";
import SearchBox from "@/components/modal-boxes/SearchBox";

export default {
  name: "IndexView",
  components: {
    HeaderView,
    SliderSection,
    BrowseCategory,
    PreviousOrder,
    ExploreCollection,
    FooterView,
    // AddressBox,
    SearchBox,
  },
};
</script>

<style scoped></style>
