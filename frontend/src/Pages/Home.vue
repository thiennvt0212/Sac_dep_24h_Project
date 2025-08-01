<template>
  <section class="bg-gray-100">
    <HeadHomeComponent
      :data="data"
      :visibleCount="visibleCount"
      @onClickAddSlide="onClickAddSlide"
      @onClickDecrSlide="onClickDecrSlide"
    />
    <DetailsProductHome />
    <IntroductionProductHome />
    <OutstandingProductsHome
      :products="allProducts"
    />
    <BenefitProductHome />
    <ProcessProductHome />
    <BrandHome />
    <NewsHome />
    <PolicyHome />
    <SlideProductHone />
  </section>
</template>
<!-- <script>
import HeadHomeComponent from "../Components/headHomeComponent.vue";
import DetailsProductHome from "../Components/detailsProductHome.vue";
import IntroductionProductHome from "../Components/introductionProductHome.vue";
import OutstandingProductsHome from "../Components/outstandingProductsHome.vue";
import BenefitProductHome from "../Components/benefitProductHome.vue";
import ProcessProductHome from "../Components/processProductHome.vue";
import BrandHome from "../Components/brandHome.vue";
import NewsHome from "../Components/newsHome.vue";
import PolicyHome from "../Components/policyHome.vue";
import SlideProductHone from "../Components/slideProductHone.vue";

export default {
  components: {
    HeadHomeComponent,
    DetailsProductHome,
    IntroductionProductHome,
    OutstandingProductsHome,
    BenefitProductHome,
    ProcessProductHome,
    BrandHome,
    NewsHome,
    PolicyHome,
    SlideProductHone,
  },
  data() {
    return {
      data: [
        {
          title: "Sản Phẩm Từ Thiên Nhiên",
          btnBuy: "MUA NGAY",
          btnContent: "LIÊN HỆ NGAY",
        },
        {
          title: "Làm Đẹp Tự Nhiên Được Chứng Nhận",
          btnBuy: "MUA NGAY",
          btnContent: "GIẢM 30%",
        },
        {
          title: "TINH CHẤT TỰ NHIÊN",
          btnBuy: "MUA SẮM NGAY",
          btnContent: "LIÊN HỆ NGAY",
        },
      ],
      visibleCount: 0,
    };
  },
  methods: {
    onClickAddSlide() {
      this.visibleCount = (this.visibleCount + 1) % this.data.length;
    },

    onClickDecrSlide() {
      this.visibleCount =
        (this.visibleCount - 1 + this.data.length) % this.data.length;
    },
  },
};
</script> -->

<script setup>
// 1. Import components
import HeadHomeComponent from "../Components/headHomeComponent.vue";
import DetailsProductHome from "../Components/detailsProductHome.vue";
import IntroductionProductHome from "../Components/introductionProductHome.vue";
import OutstandingProductsHome from "../Components/outstandingProductsHome.vue";
import BenefitProductHome from "../Components/benefitProductHome.vue";
import ProcessProductHome from "../Components/processProductHome.vue";
import BrandHome from "../Components/brandHome.vue";
import NewsHome from "../Components/newsHome.vue";
import PolicyHome from "../Components/policyHome.vue";
import SlideProductHone from "../Components/slideProductHone.vue";
import api from "@/api/client";



// 2. Import ref để quản lý state
import { ref, onMounted } from 'vue';
const allProducts = ref([]);
onMounted(async () => {
  try {
    const res = await api.get('/productss');
    console.log(res);
    allProducts.value = res.data;
  } catch (error) {
    console.error('Lỗi khi lấy sản phẩm:', error);
    alert('Không thể tải sản phẩm');
  } finally {
    loading.value = false;
  }
});
// 3. Dữ liệu
const data = ref([
  {
    title: "Sản Phẩm Từ Thiên Nhiên",
    btnBuy: "MUA NGAY",
    btnContent: "LIÊN HỆ NGAY",
  },
  {
    title: "Làm Đẹp Tự Nhiên Được Chứng Nhận",
    btnBuy: "MUA NGAY",
    btnContent: "GIẢM 30%",
  },
  {
    title: "TINH CHẤT TỰ NHIÊN",
    btnBuy: "MUA SẮM NGAY",
    btnContent: "LIÊN HỆ NGAY",
  },
]);

// 4. State quản lý slide hiện tại
const visibleCount = ref(0);

// 5. Các hàm xử lý
const onClickAddSlide = () => {
  visibleCount.value = (visibleCount.value + 1) % data.value.length;
};

const onClickDecrSlide = () => {
  visibleCount.value = (visibleCount.value - 1 + data.value.length) % data.value.length;
};
</script>

