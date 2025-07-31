<template>
  <div ref="carousel" class="w-full overflow-hidden py-8 bg-[#fdf3f2]">
    <div class="carousel-cell px-2" v-for="(img, i) in 8" :key="i">
      <img
        src="../assets/Image/cookieHome.webp"
        class="w-[225px] h-[225px] object-cover rounded-lg"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const carousel = ref(null);

onMounted(() => {
  new Flickity(carousel.value, {
    cellAlign: "left",
    contain: false,
    pageDots: false,
    wrapAround: true,
    draggable: true,
    freeScroll: false,
    prevNextButtons: false,
    autoPlay: false,
  });
});
</script>

<style scoped></style>
