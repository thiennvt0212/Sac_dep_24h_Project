<template>
    <!-- Header với màu nâu vàng (amber) -->
    <header class="bg-amber-600 text-white shadow-md">
      <div class="container px-4 py-3 flex items-center justify-between">
        <!-- Phần logo -->
        <div class="flex items-center">
          <img :src="logo" alt="logo" class="h-8" />
        </div>

        <!-- Phần tài khoản -->
        <!-- <div class="flex items-center gap-4">
          <span class="text-sm bg-white text-amber-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            demoshop2018@gmail.com
          </span>
        </div> -->
      </div>
    </header>
</template>

<script setup>
import logo from "../../../assets/Image/logo-2-e1729751913411.png";
</script>