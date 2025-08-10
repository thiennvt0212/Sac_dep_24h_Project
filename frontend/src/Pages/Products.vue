<template>
  <div class="bg-pink-50 text-gray-800">
    <!-- Banner -->
    <div
      class="relative bg-cover bg-center h-[500px]"
      :style="{ backgroundImage: `url(${bannerImage})` }"
    >
      <!-- Tiêu đề banner -->
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center"
      >
        <h1
          class="text-6xl font-light text-white mb-30 tracking-wide capitalize pb-8"
        >
          Sản Phẩm
        </h1>
        <p class="text-white text-sm mt-2">
          <a
            href="/"
            class="hover:underline opacity-80 text-white capitalize pr-4"
            >TRANG CHỦ</a
          >
          /
          <span class="opacity-70 text-orange-400 capitalize pl-4"
            >SẢN PHẨM</span
          >
        </p>
      </div>
    </div>

    <!-- Danh mục sản phẩm trượt -->
    <section class="py-4 bg-pink-50 mt-[96px] mb-[96px] relative">
      <!-- Nút trái -->
      <button
        @click="scrollLeft"
        class="absolute left-[190px] top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform opacity-40 hover:opacity-100"
        style="left: calc((100vw - 1500px) / 2)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- Nút phải -->
      <button
        @click="scrollRight"
        class="absolute right-[190px] top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform opacity-40 hover:opacity-100"
        style="right: calc((100vw - 1500px) / 2)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <!-- Danh mục trượt -->
      <div class="max-w-[1550px] mx-auto px-[20px]">
        <div
          class="overflow-hidden max-w-[1380px] w-full mx-auto relative px-[30px]"
        >
          <div
            ref="categoryScroll"
            class="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            <div
              v-for="(category, index) in categories"
              :key="category.name"
              class="flex-shrink-0 text-center group relative w-[210px]"
            >
              <!-- Danh mục sản phẩm -->
              <div
                class="w-[210px] h-[210px] rounded-full overflow-hidden border-2 transition-transform duration-500 ease-in-out hover:scale-105 mx-auto"
                :class="{
                  'border-pink-600 scale-95': selectedCategory === index,
                  'border-pink-300': selectedCategory !== index,
                }"
              >
                <img
                  :src="category.image"
                  class="object-cover w-[210px] h-[210px]"
                />
                <div
                  class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  <button
                    class="bg-white text-pink-600 p-3 rounded-full shadow-lg hover:bg-pink-100"
                    title="Thêm vào giỏ hàng"
                  >
                    🛒
                  </button>
                </div>
              </div>
              <p class="mt-2 text-sm font-medium text-gray-700">
                {{ category.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Thanh công cụ -->
    <div
      class="w-[1360px] mx-auto flex flex-wrap justify-between items-center border-b border-gray-300 pb-[15px] mb-6"
    >
      <div class="text-sm text-gray-700 mb-2 sm:mb-0">
        Hiển thị {{ startResult }}–{{ endResult }} của {{ products.length }} kết
        quả
      </div>
      <div class="flex gap-2 items-center">
        <!-- Kiểu hiển thị -->
        <div class="flex gap-2 items-center">
          <!-- 2 cột -->
          <button
            class="w-10 h-10 rounded-lg border border-gray-300 hover:border-pink-500 flex items-center justify-center transition-all duration-300"
            :class="{
              'border-pink-600 bg-pink-100 text-pink-600': viewMode === 'grid2',
            }"
            @click="viewMode = 'grid2'"
            title="Hiển thị 2 cột"
          >
            <i class="fas fa-th-large text-lg"></i>
          </button>

          <!-- 3 cột -->
          <button
            class="w-10 h-10 rounded-lg border border-gray-300 hover:border-pink-500 flex items-center justify-center transition-all duration-300"
            :class="{
              'border-pink-600 bg-pink-100 text-pink-600': viewMode === 'grid3',
            }"
            @click="viewMode = 'grid3'"
            title="Hiển thị 3 cột"
          >
            <i class="fas fa-th text-lg"></i>
          </button>

          <!-- 4 cột -->
          <button
            class="w-10 h-10 rounded-lg border border-gray-300 hover:border-pink-500 flex items-center justify-center transition-all duration-300"
            :class="{
              'border-pink-600 bg-pink-100 text-pink-600': viewMode === 'grid4',
            }"
            @click="viewMode = 'grid4'"
            title="Hiển thị 4 cột"
          >
            <i class="fas fa-th-list text-lg"></i>
          </button>
        </div>

        <!-- Dropdown -->
        <select v-model="selectedSort" class="border p-2 rounded text-sm">
          <option value="default">Thứ tự mặc định</option>
          <option value="priceAsc">Giá tăng dần</option>
          <option value="priceDesc">Giá giảm dần</option>
        </select>
      </div>
    </div>

    <!-- Danh sách sản phẩm -->
    <div class="w-[1360px] mx-auto px-[30px]">
      <div
        class="gap-6 grid"
        :class="{
          'grid-cols-2': viewMode === 'grid2',
          'sm:grid-cols-3': viewMode === 'grid3',
          'lg:grid-cols-4': viewMode === 'grid4',
        }"
      >
        <router-link
          v-for="product in paginatedProducts"
          :key="product.name"
          :to="{
            name: 'product-details',
            params: { name: product.name },
          }"
          class="bg-pink-50 rounded-xl group relative"
        >
          <div class="relative">
            <div
              class="w-full aspect-[1.026] overflow-hidden rounded-t-xl bg-white"
            >
              <img
                :src="product.image"
                alt="Tên sản phẩm"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
            >
              <button
                class="bg-white text-pink-600 p-3 rounded-full shadow-lg hover:bg-pink-100 relative group/cart"
                title="Thêm vào giỏ hàng"
              >
                <span
                  class="group-hover/cart:hidden block transition duration-200"
                  >Thêm vào giỏ hàng</span
                >
                <span
                  class="hidden group-hover/cart:inline transition duration-200"
                  >🛒</span
                >
              </button>
            </div>
          </div>

          <div class="p-4 text-center">
            <button
              class="text-sm font-semibold text-gray-800 hover:text-pink-600 transition duration-300 ease-in-out"
              @click="handleProductClick(product)"
            >
              {{ product.name }}
            </button>
            <p class="text-xs text-gray-500 mt-1">{{ product.category }}</p>
            <div class="text-red-500 font-bold mt-1">
              {{ product.price }} đ
              <span
                v-if="product.oldPrice"
                class="text-xs text-gray-400 line-through ml-2"
              >
                {{ product.oldPrice }} đ
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Phân trang -->
      <div class="w-[1360px] mx-auto py-10 flex justify-center space-x-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-3 py-1 border rounded',
            currentPage === page
              ? 'bg-pink-200 text-white font-bold'
              : 'bg-white text-gray-700',
          ]"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import cate1 from "@/assets/Image/cate1.png";
import cate2 from "@/assets/Image/cate2.png";
import cate3 from "@/assets/Image/cate3.png";
import cate4 from "@/assets/Image/cate4.png";
import cate5 from "@/assets/Image/cate5.png";
import cate6 from "@/assets/Image/cate6.png";

import img1 from "@/assets/Image/p1.jpg";
import img2 from "@/assets/Image/p2.jpg";
import img3 from "@/assets/Image/p3.jpg";
import img4 from "@/assets/Image/p4.jpg";

import bannerImage from "@/assets/Image/banner-san-pham.png";
import productApi from "@/api/product";

export default {
  name: "Products",
  data() {
    return {
      viewMode: "grid4",
      selectedSort: "default",
      showMegaMenu: false,
      bannerImage,
      currentPage: 1,
      productsPerPage: 12,
      categories: [
        { name: "Sữa Rửa Mặt", image: cate1 },
        { name: "Kem Dưỡng", image: cate2 },
        { name: "Chống Nắng", image: cate3 },
        { name: "Phấn Nền", image: cate4 },
        { name: "Tinh Chất / Serum", image: cate5 },
        { name: "Tẩy Tế Bào Da", image: cate6 },
        { name: "Toner / Nước Hoa Hồng", image: cate6 },
        { name: "Mặt Nạ Dưỡng Da", image: cate6 },
        { name: "Son Môi", image: cate6 },
        { name: "Trang Điểm Mắt", image: cate6 },
        { name: "Trang Điểm", image: cate6 },
        { name: "Trang Điểm Mắt", image: cate6 },
      ],
      products: [],
      isLoading: false,
      error: null,
    };
  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      const end = start + this.productsPerPage;
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
    startResult() {
      return (this.currentPage - 1) * this.productsPerPage + 1;
    },
    endResult() {
      return Math.min(
        this.currentPage * this.productsPerPage,
        this.products.length
      );
    },
  },
  methods: {
    scrollLeft() {
      this.$refs.categoryScroll.scrollBy({
        left: -1360,
        behavior: "smooth",
      });
    },
    scrollRight() {
      this.$refs.categoryScroll.scrollBy({
        left: 1360,
        behavior: "smooth",
      });
    },
    async fetchProducts() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await productApi.getAll();
        // Kiểm tra và xử lý response
        if (Array.isArray(response.data)) {
          this.products = response.data;
        } else if (Array.isArray(response)) {
          this.products = response;
        } else {
          throw new Error("Dữ liệu sản phẩm không hợp lệ");
        }
      } catch (err) {
        this.error = err.message || "Có lỗi xảy ra khi tải sản phẩm";
        console.error("Lỗi khi tải sản phẩm:", err);
        this.products = [];
      } finally {
        this.isLoading = false;
      }
    },
    formatPrice(price) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(price || 0);
    },
    sortProducts() {
      switch (this.selectedSort) {
        case "price-asc":
          this.products.sort((a, b) => (a.price || 0) - (b.price || 0));
          break;
        case "price-desc":
          this.products.sort((a, b) => (b.price || 0) - (a.price || 0));
          break;
        case "name-asc":
          this.products.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
          break;
        case "name-desc":
          this.products.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
          break;
        default:
          // Không sắp xếp hoặc reset về thứ tự ban đầu
          this.fetchProducts();
      }
      this.currentPage = 1; // Reset về trang đầu khi sắp xếp
    },
  },
  async created() {
    await this.fetchProducts();
  },
};
</script>

<style scoped>
.scrollbar-hide {
  overflow: hidden;
  scroll-behavior: smooth;

  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>
