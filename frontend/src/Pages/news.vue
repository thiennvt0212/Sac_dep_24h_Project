<script setup>
import { ref, onMounted } from "vue";
import BlogList from "@/Components/Blog/BlogList.vue";
import BlogSidebar from "@/Components/Blog/BlogSidebar.vue";
import bgImage from "../assets/Image/banner.png";
import bannerImage from "@/assets/Image/banner-san-pham.png";
import api from "@/api/client";
const allPost = ref([]);
onMounted(async () => {
  try {
    const res = await api.get('/blogs');
    console.log(res);
    allPost.value = res.data;
  } catch (error) {
    console.error('Lỗi khi lấy blogs:', error);
    alert('Không thể tải blogs');
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <div
    class="relative bg-cover bg-center h-[500px] mb-[100px]"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <!-- Tiêu đề banner -->
    <div
      class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center"
    >
      <h1 class="text-6xl font-light text-white mb-30 tracking-wide capitalize pb-8 ">Tin Tức</h1>
      <p class="text-white text-sm mt-2">
        <a href="/" class="hover:underline opacity-80 text-white capitalize pr-4">TRANG CHỦ</a> /
          <span class="opacity-70 text-orange-400 capitalize pl-4">TIN TỨC</span>
      </p>
    </div>
  </div>
  <div class="container max-w-[100%] px-4 mb-[40px]">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-9/12 px-4">
        <BlogList :posts="allPost" />
      </div>

      <div class="w-full lg:w-3/12 px-4">
        <BlogSidebar :posts="allPost" />
      </div>
    </div>
  </div>
</template>
