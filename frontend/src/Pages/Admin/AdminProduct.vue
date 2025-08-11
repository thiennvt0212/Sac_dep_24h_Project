<template>
    <div>
        <main
        class="flex-1 transition-all duration-300 ease-in-out bg-gray-50"
        :class="sidebarOpen ? 'ml-0 md:ml-0' : 'ml-0'"
      >
        <!-- Sản phẩm -->
        <div v-if="activeTab === 'products'" class="space-y-6">
          <!-- Thanh lọc/tìm kiếm -->
         <div class="bg-white p-4 rounded-xl shadow-sm">
            <div class="flex flex-wrap justify-end items-center gap-3">
              <!-- Ô tìm kiếm đã bỏ icon -->
              <div class="relative flex-1 max-w-md ml-auto">
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Tìm kiếm theo tên hoặc mã sản phẩm..."
                  class="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-amber-700"
                  @keyup.enter="handleSearch"
                />
              </div>
            </div>
          </div>
        
          <!-- Action buttons -->
          <div class="flex gap-3 p-[24px]">
            <button
              class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
              @click="showModal = true"
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Thêm mới
            </button>
          </div>

          <!-- Table -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden pl-[24px] pr-[24px]">
            <div class="overflow-x-auto">
              <table class="min-w-full text-sm divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Mã
                    </th>
                    <th
                      class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ảnh
                    </th>
                    <th
                      class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tên sản phẩm
                    </th>
                    <th
                      class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Giá
                    </th>
                    <th
                      class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Trạng thái
                    </th>
                    <th
                      class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="item in filteredProducts"
                    :key="item.id"
                    class="hover:bg-gray-50 transition-colors"
                  >
                    <td class="px-4 py-3 text-gray-700">{{ item.sku }}</td>
                    <td class="px-4 py-3">
                      <img
                        :src="item.image"
                        alt="Ảnh"
                        class="h-10 w-10 object-cover rounded-md border border-gray-200"
                      />
                    </td>
                    <td class="px-4 py-3 text-amber-600 font-medium">
                      {{ item.name }}
                    </td>
                    <td class="px-4 py-3 text-amber-600 font-medium">
                    {{ formatCurrency(item.price) }}
                    </td>
                    <td class="px-4 py-3">
                      <span
                        class="px-2 py-1 text-xs rounded-full"
                        :class="
                          item.quantity > 0
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        "
                      >
                        {{ item.quantity > 0 ? "Còn" : "Hết" }}
                      </span>
                    </td>
                    <td class="px-4 py-3 flex flex-row">
                      <button
                        @click="openEditProduct(item)"
                        class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium bg-green-400 hover:opacity-75"
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
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Sửa
                      </button>
                      <button
                        class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium bg-red-600 hover:opacity-75 text-white"
                        @click="deleteProduct(item.id)"
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
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Xoá
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <CreateProductModal
                :visible="showModal"
                @close="showModal = false"
                @created="loadProducts"
              />
              <EditProductModal
                :visible="showEditModal"
                :product="editingProduct"
                @close="showEditModal = false"
                @updated="loadProducts"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

import productApi from "@/api/product";
import CreateProductModal from "../Admin/Components/CreateProductModal.vue";
import EditProductModal from "./Components/EditProductModal.vue";

const sidebarOpen = ref(true);
const products = ref([]);
const activeTab = ref("products");
const showModal = ref(false);
const searchQuery = ref("");
const router = useRouter();
const route = useRoute();
const showEditModal = ref(false);
const editingProduct = ref(null);

// Computed property để lọc sản phẩm
const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  
  const query = searchQuery.value.toLowerCase();
  return products.value.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.sku.toLowerCase().includes(query)
  );
});

onMounted(async () => {
  await loadProducts();
});

async function loadProducts() {
  try {
    products.value = await productApi.getAll();
  } catch (err) {
    console.error("Lỗi khi load sản phẩm:", err);
  }
}

function openEditProduct(products) {
  editingProduct.value = { ...products };
  showEditModal.value = true;
}

function handleSearch() {
  // Không cần làm gì đặc biệt vì computed property sẽ tự động cập nhật
}

async function deleteProduct(id) {
  if (!confirm("Bạn có chắc chắn muốn xoá?")) return;
  try {
    await productApi.delete(id);
    await loadProducts();
    alert("Xoá thành công!");
  } catch (error) {
    console.error("Lỗi khi xoá sản phẩm:", error);
    alert("Xoá thất bại!");
  }
}


const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};
</script>