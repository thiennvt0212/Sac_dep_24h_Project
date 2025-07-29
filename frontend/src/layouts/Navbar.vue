<script setup>
import logo from "../assets/Image/logo-2-e1729751913411.png";
</script>

<template>
  <div class="bg-red-500 flex flex-row border-t-2  pt-[20px] pr-[25px] pb-[20px] pl-[25px]">
    <div class="basis-1/5 flex items-center h-16 cursor-pointer">
      <a>
        <img :src="logo" alt="logo" class="w-[200px] h-auto "/>
      </a>
    </div>
    <div class="basis-3/5 flex items-center h-16 cursor-pointer">
      <uL class="flex m-auto">
        <li class=" flex flex-row  pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 bg-[var(--button-color)] ml-2 mr-2 rounded-md font-medium text-[var(--vt-c-white)]">Trang chủ</li>
        <li class=" flex flex-row  pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 bg-[var(--button-color)] ml-2 mr-2 rounded-md font-medium text-[var(--vt-c-white)]" >Giới thiệu</li>
        <li class=" flex flex-row  pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 bg-[var(--button-color)] ml-2 mr-2 rounded-md font-medium text-[var(--vt-c-white)]">Sản phẩm</li>
        <li class=" flex flex-row  pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 bg-[var(--button-color)] ml-2 mr-2 rounded-md font-medium text-[var(--vt-c-white)]">Tin tức</li>
        <li class=" flex flex-row  pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 bg-[var(--button-color)] ml-2 mr-2 rounded-md font-medium text-[var(--vt-c-white)]">Liên hệ</li>
      </uL>
    </div>
    <div class="basis-1/5 flex justify-end h-16">
      <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']"  class="text-[var(--vt-c-white)]"/>
        <p class="pl-1 pr-1 font-medium text-[var(--vt-c-white)]">TÌM KIẾM</p>
      </div>
      <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-[var(--vt-c-white)]" />      
        <span class="h-4 bg-white mx-2  w-[1px] " ></span>
        <span class="text-[var(--vt-c-white)]" >0đ</span>
      </div>
    </div>
  </div>
</template>

<style></style>
