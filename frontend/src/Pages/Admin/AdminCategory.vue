<template>
  <div>
    <main
      class="flex-1 transition-all duration-300 ease-in-out bg-gray-50"
      :class="sidebarOpen ? 'ml-0 md:ml-0' : 'ml-0'"
    >
      <div v-if="activeTab === 'categories'" class="space-y-6">
        <!-- Thanh lọc/tìm kiếm -->
        <div class="bg-white p-4 rounded-xl shadow-sm">
          <div class="flex flex-wrap items-center gap-3">
            <button
              class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Lọc
            </button>
          </div>
        </div>

        <div class="flex gap-3">
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
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Các danh mục
                  </th>
                  <th
                    class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Mô tả
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
                  v-for="category in categories"
                  :key="category.id"
                  class="hover:bg-gray-50 transition-colors"
                >
                  <td class="px-4 py-3 text-gray-700">{{ category.name }}</td>
                  <td class="px-4 py-3 text-amber-600 font-medium">
                    {{ category.description }}
                  </td>

                  <td class="px-4 py-3 flex flex-row">
                    <button
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
                      @click="deleteCategory(category.id)"
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
            <CreateCategoryModal
              :visible="showModal"
              @close="showModal = false"
              @created="loadCategories"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

import categoryApi from "@/api/category";
import CreateCategoryModal from "../Admin/Components/CreateCategoryModal.vue";

const sidebarOpen = ref(true);
const categories = ref([]);
const activeTab = ref("categories");
const showModal = ref(false);

onMounted(async () => {
  await loadCategories();
});

async function loadCategories() {
  try {
    categories.value = await categoryApi.getAll();
  } catch (err) {
    console.error("Lỗi khi load danh mục:", err);
  }
}

async function deleteCategory(id) {
  if (!confirm("Bạn có chắc chắn muốn xoá?")) return;
  try {
    await categoryApi.delete(id);
    await loadCategories();
    alert("Xoá thành công!");
  } catch (error) {
    console.error("Lỗi khi xoá sản phẩm:", error);
    alert("Xoá thất bại!");
  }
}
</script>
