<template>
    <aside class="bg-gray-50 border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
        :class="sidebarOpen ? 'w-64' : 'w-20'">
        <nav class="flex flex-col gap-1 pt-4 px-2">
            <button @click="toggleSidebar" class="text-white focus:outline-none hover:text-amber-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <router-link to="/admin/product"
                class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
                :class="$route.name === 'admin-product'
                        ? 'bg-amber-100 text-amber-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    ">
                <div class="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                </div>
                <span class="transition-opacity duration-200" :class="{ 'opacity-0': !sidebarOpen }">
                    Sản phẩm
                </span>
            </router-link>

            <router-link to="/admin/category"
                class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
                :class="$route.name === 'admin-category'
                        ? 'bg-amber-100 text-amber-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    ">
                <div class="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <span class="transition-opacity duration-200" :class="{ 'opacity-0': !sidebarOpen }">Loại sản
                    phẩm</span>
            </router-link>

            <router-link to="/admin/news"
                class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
                :class="$route.name === 'admin-news'
                        ? 'bg-amber-100 text-amber-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    ">
                <div class="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <span class="transition-opacity duration-200" :class="{ 'opacity-0': !sidebarOpen }">Tin tức</span>
            </router-link>

            <router-link to="/admin/users"
                class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
                :class="$route.name === 'admin-users'
                        ? 'bg-amber-100 text-amber-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    ">
                <div class="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <span class="transition-opacity duration-200" :class="{ 'opacity-0': !sidebarOpen }">Tài khoản</span>
            </router-link>
        </nav>
    </aside>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const sidebarOpen = ref(true);

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};

</script>