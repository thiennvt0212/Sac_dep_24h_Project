<template>
  <div>
    <main
      class="flex-1 transition-all duration-300 ease-in-out bg-gray-50"
      :class="sidebarOpen ? 'ml-0 md:ml-0' : 'ml-0'"
    >
      <div v-if="activeTab === 'categories'" class="space-y-6 p-6">
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
          <div class="flex gap-3 flex-1 justify-end">
            <input
              v-model="searchText"
              type="text"
              placeholder="Tìm kiếm danh mục"
              class="border px-3 py-2 rounded-lg text-sm w-64"
            />
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
              @click="handleSearch"
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
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
              Tìm kiếm
            </button>
          </div>
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
                  <td
                    class="px-4 py-3 max-w-[134px] break-words first-letter:uppercase text-gray-700"
                  >
                    {{ category.name }}
                  </td>
                  <td
                    class="px-4 py-3 max-w-[854px] break-words first-letter:uppercase text-amber-600 font-medium"
                  >
                    {{ category.description }}
                  </td>

                  <td class="px-4 py-3 flex flex-row">
                    <button
                      @click="openEditCategory(category)"
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
            <div v-if="searchNotFound" class="text-center text-red-500 py-4">
              Không tìm thấy tên danh mục phù hợp
            </div>
            <CreateCategoryModal
              :visible="showModal"
              @close="showModal = false"
              @created="loadCategories"
            />
            <EditCategoryModal
              :visible="showEditModal"
              :category="editingCategory"
              @close="showEditModal = false"
              @updated="loadCategories"
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
import EditCategoryModal from "../Admin/Components/EditCategoryModal.vue"; // Thêm dòng này

const sidebarOpen = ref(true);
const categories = ref([]);
const activeTab = ref("categories");
const showModal = ref(false);
const searchText = ref("");
const searchNotFound = ref(false);
const showEditModal = ref(false);
const editingCategory = ref(null);

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
function openEditCategory(category) {
  editingCategory.value = { ...category };
  showEditModal.value = true;
}
async function handleSearch() {
  const text = searchText.value.trim().toLowerCase();
  if (!text) {
    await loadCategories();
    searchNotFound.value = false;
    return;
  }
  const filtered = categories.value.filter((category) =>
    category.name?.toLowerCase().includes(text)
  );
  categories.value = filtered;
  searchNotFound.value = filtered.length === 0;
}
</script>
