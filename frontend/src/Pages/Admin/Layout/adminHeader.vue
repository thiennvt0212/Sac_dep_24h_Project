<script setup>
import logo from "../../../assets/Image/logo-2-e1729751913411.png";

import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const auth = useAuthStore();
const handleLogout = () => {
    auth.logout();
    router.push('/account'); // Redirect to home after logout
}
</script>

<template>
    <!-- Header với màu nâu vàng (amber) -->
    <header class="bg-amber-600 text-white shadow-md">
      <div
        class="container mx-auto px-6 py-3 flex items-center justify-between"
      >
        <div class="flex items-center gap-4">
          
          <div class="flex items-center gap-2">
            <img :src="logo" alt="logo" class="h-8" />
            <span class="font-bold text-lg">Sắc đẹp 24h</span>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-6">
          <a
            href="#"
            class="text-sm hover:text-amber-100 transition-colors flex items-center gap-1"
          >
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
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Hỗ trợ
          </a>
          <a
            href="#"
            class="text-sm hover:text-amber-100 transition-colors flex items-center gap-1"
          >
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Hướng dẫn
          </a>
          <a
            href="#"
            class="text-sm hover:text-amber-100 transition-colors flex items-center gap-1"
          >
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            Thông báo
          </a>
          <span
            class="text-sm bg-white text-amber-700 px-3 py-1 rounded-full font-medium flex items-center gap-1"
          >
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
            <span v-if="auth.currentUser">
              {{ auth.currentUser.username }}
              <button @click="handleLogout">Đăng xuất</button>
            </span>
            <router-link v-else to="/account" >Đăng nhập</router-link>
          </span>
        </div>
      </div>
    </header>

</template>
