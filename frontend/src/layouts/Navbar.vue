<script setup>
import { ref } from "vue";
import logo from "../assets/Image/logo-2-e1729751913411.png";
import ModalMenu from "../Components/ModalMenu.vue";

const isHovered = ref(false);
</script>

<template>
  <div
    class="flex flex-row border-t-2 pt-[20px] pr-[25px] pb-[20px] pl-[25px] relative inline-block absolute bg-orange-400" 
  >
    <div class="basis-1/5 flex items-center h-16 cursor-pointer">
      <a>
        <img :src="logo" alt="logo" class="w-[200px] h-auto" />
      </a>
    </div>
    <div class="basis-3/5 flex items-center h-16 cursor-pointer">
      <ul class="flex m-auto">
        <li
          class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium hover-btn-primary"
        >
          Trang chủ
        </li>
        <li
          class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium hover-btn-primary"
        >
          Giới thiệu
        </li>
        <li
          class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium hover-btn-primary items-center"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          Sản phẩm
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="ml-[4px] text-[10px]"
          />
        </li>
        <li
          class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium hover-btn-primary"
        >
          Tin tức
        </li>
        <li
          class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium hover-btn-primary"
        >
          Liên hệ
        </li>
      </ul>
    </div>
    <div class="basis-1/5 flex justify-end h-16">
      <div
        class="flex items-center ml-4 mr-4 hover-text-primary cursor-pointer"
      >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <p class="pl-1 pr-1 font-medium">TÌM KIẾM</p>
      </div>
      <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon
          :icon="['fas', 'cart-shopping']"
          class="hover-text-primary cursor-pointer"
        />
        <span class="h-4 bg-white mx-2 w-[1px]"></span>
        <span class="text-[var(--vt-c-white)]">0đ</span>
      </div>
    </div>
    <div class="absolute left-0 z-10 w-full top-full " v-if="isHovered">
      <ModalMenu />
    </div>
  </div>

</template>

<style></style>
