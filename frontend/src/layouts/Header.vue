<script setup>
  import bgImage from '../assets/Image/homeHeadImg.jpg';
</script>

<template>
  <!-- <div :style="{ backgroundImage: `url(${bgImage})` }"> -->

  <div class="relative ">
  <div class="flex flex-row mr-[10px] ml-[10px] h-10 top-0 left-0 right-0 bottom-0 absolute z-10" >
    <div class="basis-2/3 flex">
      <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon :icon="['fas', 'headphones']" class="text-[var(--vt-c-white)]" />
        <p class="pl-2 text-[12px] font-normal text-[var(--vt-c-white)] hover-text-primary cursor-pointer">(+84) 0313-728-397</p>
      </div>
      <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-[var(--vt-c-white)]"/>
        <p class="pl-2 text-[12px] font-normal text-[var(--vt-c-white)] hover-text-primary cursor-pointer">info@themona.global</p>
      </div>
    </div>
    <div class="basis-1/3 flex justify-end" >
      
        <div class="flex items-center ml-4 mr-4 hover-text-primary cursor-pointer">
          <router-link to="/account" class="flex items-center">
        <font-awesome-icon :icon="['fas', 'user']"/>
        <p class="pl-1 pr-1 font-medium ">ĐĂNG NHẬP</p>
        </router-link>
      </div>
      
      <div class="flex items-center ml-4 mr-4 hover-text-primary cursor-pointer">
        <font-awesome-icon :icon="['far', 'heart']" />
        <p class="pl-1 pr-1 font-medium">YÊU THÍCH</p>
      </div>
    </div>
  </div>
  </div>
  <!-- </div> -->
</template>

<style></style>
