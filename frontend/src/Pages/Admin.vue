<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header với màu nâu vàng (amber) -->
    <header class="bg-amber-600 text-white shadow-md">
      <div class="container mx-auto px-6 py-3 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <button @click="toggleSidebar" class="text-white focus:outline-none hover:text-amber-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div class="flex items-center gap-2">
            <img :src="logo" alt="logo" class="h-8" />
            <span class="font-bold text-lg">Sắc đẹp 24h</span>
          </div>
        </div>
        
        <div class="hidden md:flex items-center gap-6">
          <a href="#" class="text-sm hover:text-amber-100 transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Hỗ trợ
          </a>
          <a href="#" class="text-sm hover:text-amber-100 transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Hướng dẫn
          </a>
          <a href="#" class="text-sm hover:text-amber-100 transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Thông báo
          </a>
          <span class="text-sm bg-white text-amber-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            demoshop2018@gmail.com
          </span>
        </div>
      </div>
    </header>
    
    <div class="flex">
      <!-- Sidebar với hiệu ứng mượt mà -->
      <aside class="bg-gray-50 border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden" 
             :class="sidebarOpen ? 'w-64' : 'w-20'">
        <nav class="flex flex-col gap-1 pt-4 px-2">
          <a @click="activeTab = 'products'" 
             class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
             :class="activeTab === 'products' ? 'bg-amber-100 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'">
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span class="transition-opacity duration-200" :class="{'opacity-0': !sidebarOpen}">Sản phẩm</span>
          </a>
          
          <a @click="activeTab = 'inventory'" 
             class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
             :class="activeTab === 'inventory' ? 'bg-amber-100 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'">
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span class="transition-opacity duration-200" :class="{'opacity-0': !sidebarOpen}">Kho hàng</span>
          </a>
          
          <a @click="activeTab = 'sales'" 
             class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
             :class="activeTab === 'sales' ? 'bg-amber-100 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'">
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span class="transition-opacity duration-200" :class="{'opacity-0': !sidebarOpen}">Bán hàng</span>
          </a>
          
          <a @click="activeTab = 'orders'" 
             class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
             :class="activeTab === 'orders' ? 'bg-amber-100 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'">
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span class="transition-opacity duration-200" :class="{'opacity-0': !sidebarOpen}">Đơn hàng</span>
          </a>
          
          <a @click="activeTab = 'customers'" 
             class="px-4 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap overflow-hidden cursor-pointer transition-colors"
             :class="activeTab === 'customers' ? 'bg-amber-100 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'">
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span class="transition-opacity duration-200" :class="{'opacity-0': !sidebarOpen}">Khách hàng</span>
          </a>
        </nav>
      </aside>
      
      <!-- Main content -->
      <main class="flex-1 transition-all duration-300 ease-in-out bg-gray-50" 
            :class="sidebarOpen ? 'ml-0 md:ml-0' : 'ml-0'">
        <!-- Sản phẩm -->
        <div v-if="activeTab === 'products'" class="space-y-6">
          <!-- Thanh lọc/tìm kiếm -->
          <div class="bg-white p-4 rounded-xl shadow-sm">
            <div class="flex flex-wrap items-center gap-3">
              <select class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                <option>Nâng cao</option>
              </select>
              <input type="text" placeholder="ID" class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-24 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
              <select class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                <option>Demo Shop 2016</option>
                <option>Demo Shop 2018</option>
              </select>
              <select class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                <option>Demo Shop 2018</option>
              </select>
              <input type="text" placeholder="Tên / Mã / Mã vạch" class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-40 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
              <select class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                <option>Danh mục</option>
              </select>
              <select class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                <option>Có tồn</option>
              </select>
              <div class="flex items-center gap-1">
                <input type="text" placeholder="Từ" class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-16 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                <span class="text-gray-500">-</span>
                <input type="text" placeholder="Đến" class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-16 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <input type="text" placeholder="Nhà cung cấp" class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-32 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
              <button class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Lọc
              </button>
            </div>
          </div>
          
          <!-- Action buttons -->
          <div class="flex gap-3">
            <button class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Thêm mới
            </button>
            <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              In mã vạch
            </button>
            <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Hành động
            </button>
          </div>
          
          <!-- Table -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="min-w-full text-sm divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Mã vạch</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Mã</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Giá vốn</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Giá bán</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Giá buôn</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Tồn</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Tổng tồn</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">TT</th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">HD</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="item in products" :key="item.id" class="hover:bg-gray-50 transition-colors">
                    <td class="px-4 py-3 text-gray-700">{{ item.id }}</td>
                    <td class="px-4 py-3">
                      <img :src="item.image" alt="Ảnh" class="h-10 w-10 object-cover rounded-md border border-gray-200" />
                    </td>
                    <td class="px-4 py-3 text-gray-700 font-mono">{{ item.id }}</td>
                    <td class="px-4 py-3 text-amber-600 font-medium">{{ item.name }}</td>
                    <td class="px-4 py-3 text-gray-700">{{ item.description }}</td>
                    <td class="px-4 py-3 text-gray-700">{{ formatCurrency(item.price) }}</td>
                    <td class="px-4 py-3 text-gray-700 font-medium">{{ formatCurrency(item.image) }}</td>
                    <td class="px-4 py-3 text-gray-700">{{ formatCurrency(item.sku) }}</td>
                    <td class="px-4 py-3 text-gray-700">{{ item.category }}</td>
                    <td class="px-4 py-3 text-gray-700">{{ item.quantity }}</td>
                    <td class="px-4 py-3">
                      <span class="px-2 py-1 text-xs rounded-full" 
                            :class="item.status > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                        {{ item.status > 0 ? 'Còn' : 'Hết' }}
                      </span>
                    </td>
                    <td class="px-4 py-3">
                      <button class="text-amber-600 hover:text-amber-800 transition-colors flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Sửa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Các tab khác -->
        <div v-else class="bg-white p-6 rounded-xl shadow-sm">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            {{ getTabTitle(activeTab) }}
          </h2>
          <div class="border-t border-gray-200 pt-4">
            <p class="text-gray-600">
              Nội dung quản lý {{ getTabTitle(activeTab).toLowerCase() }} sẽ hiển thị ở đây.
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted  } from "vue";
import logo from "../assets/Image/logo-2-e1729751913411.png";
import productApi from "@/api/product";

const sidebarOpen = ref(true);
const products = ref([]);
const activeTab = ref('products');

onMounted(async () => {
  try {
    products.value = await productApi.getAll();
  } catch (err) {
    console.error('Lỗi khi load user:', err);
  }
});

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const getTabTitle = (tab) => {
  const titles = {
    products: 'Quản lý sản phẩm',
    inventory: 'Quản lý kho hàng',
    sales: 'Quản lý bán hàng',
    orders: 'Quản lý đơn hàng',
    customers: 'Quản lý khách hàng'
  };
  return titles[tab] || 'Trang chủ';
};

// const products = ref([
//   {
//     id: "6202785",
//     image: "https://via.placeholder.com/150?text=SP",
//     barcode: "2000045238480",
//     code: "VN003",
//     name: "Váy ngắn 003",
//     cost: 80000,
//     price: 190000,
//     wholesale: 130000,
//     stock: "20",
//     totalStock: "20",
//     status: 20,
//   },
//   {
//     id: "6202782",
//     image: "https://via.placeholder.com/150?text=SP",
//     barcode: "2000045238442",
//     code: "VD002",
//     name: "Váy dài 002",
//     cost: 120000,
//     price: 260000,
//     wholesale: 210000,
//     stock: "50",
//     totalStock: "50",
//     status: 50,
//   },
//   {
//     id: "6202781",
//     image: "https://via.placeholder.com/150?text=SP",
//     barcode: "2000045238435",
//     code: "VD001",
//     name: "Váy dài 001",
//     cost: 150000,
//     price: 280000,
//     wholesale: 250000,
//     stock: "50",
//     totalStock: "50",
//     status: 0,
//   },
// ]);


</script>