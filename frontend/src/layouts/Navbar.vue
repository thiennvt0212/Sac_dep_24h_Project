<script setup>
import { ref } from "vue";
import logo from "../assets/Image/logo-2-e1729751913411.png";
import ModalMenu from "../Components/ModalMenu.vue";

const isHovered = ref(false);
</script>

<template>
  <div class="relative"
    @mouseenter="isHovered = false"
    @mouseleave="isHovered = false" >
    <div
      class="flex flex-row border-t-2 pt-[20px] pr-[25px] pb-[20px] pl-[25px] top-[40px] left-0 right-0 bottom-10 z-20 absolute"
    >
      <div class="basis-1/5 flex items-center h-16 cursor-pointer">
        <router-link to="/">
          <img :src="logo" alt="logo" class="w-[200px] h-auto" />
        </router-link>
      </div>
      <div class="basis-3/5 flex items-center h-16 cursor-pointer">
        <ul class="flex m-auto">
          <router-link to="/">
          <li
            class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium hover-btn-primary"
          >
            Trang chủ
          </li>
          </router-link>
          <li
            class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium hover-btn-primary"
          >
            Giới thiệu
          </li>
          <li
            class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium hover-btn-primary items-center after:absolute after:left-0 after:bottom-[-24px] after:w-full after:h-8 after:bg-transparent "
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
      <div 
      v-if="isHovered"
      >
        <ModalMenu />
      </div>
    </div>
  </div>
</template>

<style></style>
