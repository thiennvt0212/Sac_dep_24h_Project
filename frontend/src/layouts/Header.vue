<script setup></script>

<template>
  <div class="flex flex-row mr-[10px] ml-[10px] h-10 bg-red-500">
    <div class="basis-2/3 flex">
      <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon :icon="['fas', 'headphones']" class="text-[var(--vt-c-white)]" />
        <p class="pl-2 text-[12px] font-normal text-[var(--vt-c-white)]">(+84) 0313-728-397</p>
      </div>
      <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-[var(--vt-c-white)]"/>
        <P class="pl-2 text-[12px] font-normal text-[var(--vt-c-white)]">info@themona.global</P>
      </div>
    </div>
    <div class="basis-1/3 flex justify-end" >
        <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon :icon="['fas', 'user']"  class="text-[var(--vt-c-white)]"/>
        <p class="pl-1 pr-1 font-medium text-[var(--vt-c-white)]">ĐĂNG NHẬP</p>
      </div>
      <div class="flex items-center ml-4 mr-4">
        <font-awesome-icon :icon="['far', 'heart']"  class="text-[var(--vt-c-white)]"/>
        <P class="pl-1 pr-1 font-medium text-[var(--vt-c-white)]">YÊU THÍCH</P>
      </div>
    </div>
  </div>
</template>

<style></style>
