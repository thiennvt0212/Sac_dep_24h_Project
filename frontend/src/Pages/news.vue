<script setup>
import { ref } from "vue";
import BlogList from "@/Components/Blog/BlogList.vue";
import BlogSidebar from "@/Components/Blog/BlogSidebar.vue";
import bgImage from "../assets/Image/banner.png";
import bannerImage from "@/assets/Image/banner-san-pham.png";
const allPost = ref([
  {
    id: 1,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 2,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 3,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 4,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 5,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 6,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 7,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg2.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 8,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg2.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 9,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg2.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 10,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg2.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 11,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg2.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 12,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg2.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 13,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 14,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 15,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 16,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 17,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
  {
    id: 18,
    type: "cbd pastries",
    title: "Making CBD-Infused Pastries And Cupcakes",
    description:
      "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...",
    image: new URL("../assets/Image/blogImg1.png", import.meta.url).href,
    date: "10/03/2003",
  },
]);
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
