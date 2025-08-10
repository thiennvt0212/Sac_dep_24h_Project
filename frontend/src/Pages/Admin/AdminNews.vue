<template>
  <div>
    <main class="flex-1 transition-all duration-300 ease-in-out bg-gray-50 p-6">
      <div class="flex gap-3 mb-4">
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
          Thêm mới tin tức
        </button>
        <input
          v-model="searchText"
          type="text"
          placeholder="Tìm kiếm tiêu đề hoặc mô tả..."
          class="border px-3 py-2 rounded-lg text-sm w-64 ml-auto"
          @keyup.enter="handleSearch"
        />
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ml-2"
          @click="handleSearch"
        >
          Tìm kiếm
        </button>
      </div>

      <div class="bg-white rounded-xl shadow-sm overflow-hidden p-6">
        <table class="min-w-full text-sm divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-4 py-3 text-left font-medium text-gray-500 uppercase"
              >
                ID
              </th>
              <th
                class="px-4 py-3 text-left font-medium text-gray-500 uppercase"
              >
                Tiêu đề
              </th>
              <th
                class="px-4 py-3 text-left font-medium text-gray-500 uppercase"
              >
                Mô tả
              </th>
              <th
                class="px-4 py-3 text-left font-medium text-gray-500 uppercase"
              >
                Ảnh
              </th>
              <th
                class="px-4 py-3 text-left font-medium text-gray-500 uppercase"
              >
                Ngày tạo
              </th>
              <th
                class="px-4 py-3 text-left font-medium text-gray-500 uppercase"
              >
                Hành động
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="news in filteredNews"
              :key="news.id"
              class="hover:bg-gray-50"
            >
              <td class="px-4 py-3">{{ news.id }}</td>
              <td class="px-4 py-3 text-amber-600 font-medium">
                {{ news.title }}
              </td>
              <td class="px-4 py-3">{{ news.description }}</td>
              <td class="px-4 py-3">
                <img
                  v-if="news.image"
                  :src="news.image"
                  alt="Ảnh"
                  class="w-16 h-16 object-cover rounded"
                />
              </td>
              <td class="px-4 py-3">{{ formatDate(news.createdAt) }}</td>
              <td class="px-4 py-3 flex gap-2">
                <button
                  class="bg-green-400 rounded-md px-4 py-2 text-white hover:opacity-75"
                  @click="openEditNews(news)"
                >
                  Cập nhật
                </button>
                <button
                  class="bg-red-600 rounded-md px-4 py-2 text-white hover:opacity-75"
                  @click="deleteNews(news.id)"
                >
                  Xóa
                </button>
              </td>
            </tr>
            <tr v-if="filteredNews.length === 0">
              <td colspan="6" class="text-center py-4 text-red-500">
                Không tìm thấy tin tức phù hợp.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      >
        <div class="bg-white rounded p-6 w-96">
          <h3 class="text-lg font-bold mb-4">Thêm mới tin tức</h3>
          <input
            v-model="form.title"
            placeholder="Tiêu đề"
            class="border p-2 mb-3 w-full"
          />
          <textarea
            v-model="form.description"
            placeholder="Mô tả"
            class="border p-2 mb-3 w-full"
            rows="3"
          ></textarea>
          <input
            v-model="form.image"
            placeholder="URL ảnh"
            class="border p-2 mb-3 w-full"
          />
          <div class="flex justify-end gap-2">
            <button
              @click="closeModal"
              class="px-4 py-2 rounded bg-gray-400 hover:bg-gray-500"
            >
              Hủy
            </button>
            <button
              @click="createNews"
              class="px-4 py-2 rounded bg-amber-600 text-white hover:bg-amber-700"
            >
              Tạo
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="showEditModal"
        class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      >
        <div class="bg-white rounded p-6 w-96">
          <h3 class="text-lg font-bold mb-4">Cập nhật tin tức</h3>
          <input
            v-model="editForm.title"
            placeholder="Tiêu đề"
            class="border p-2 mb-3 w-full"
          />
          <textarea
            v-model="editForm.description"
            placeholder="Mô tả"
            class="border p-2 mb-3 w-full"
            rows="3"
          ></textarea>
          <input
            v-model="editForm.image"
            placeholder="URL ảnh"
            class="border p-2 mb-3 w-full"
          />
          <div class="flex justify-end gap-2">
            <button
              @click="closeEditModal"
              class="px-4 py-2 rounded bg-gray-400 hover:bg-gray-500"
            >
              Hủy
            </button>
            <button
              @click="updateNews"
              class="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import newsApi from "@/api/newsApi";

const newsList = ref([]);
const showModal = ref(false);
const showEditModal = ref(false);

const form = ref({ title: "", description: "", image: "" });
const editForm = ref({ id: null, title: "", description: "", image: "" });

const searchText = ref("");

const filteredNews = computed(() => {
  if (!searchText.value.trim()) return newsList.value;
  const text = searchText.value.toLowerCase();
  return newsList.value.filter(
    (n) =>
      n.title.toLowerCase().includes(text) ||
      n.description.toLowerCase().includes(text)
  );
});

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString();
}

function closeModal() {
  showModal.value = false;
  form.value = { title: "", description: "", image: "" };
}

function closeEditModal() {
  showEditModal.value = false;
  editForm.value = { id: null, title: "", description: "", image: "" };
}

async function fetchNews() {
  try {
    newsList.value = await newsApi.getAll();
  } catch (error) {
    console.error("Lỗi tải tin tức:", error);
  }
}

async function createNews() {
  try {
    await newsApi.create(form.value);
    closeModal();
    fetchNews();
  } catch (error) {
    console.error("Lỗi tạo tin:", error);
  }
}

async function deleteNews(id) {
  if (!confirm("Bạn có chắc chắn muốn xóa tin tức này?")) return;
  try {
    await newsApi.remove(id);
    fetchNews();
  } catch (error) {
    console.error("Lỗi xóa tin:", error);
  }
}

function openEditNews(news) {
  editForm.value = { ...news };
  showEditModal.value = true;
}

async function updateNews() {
  try {
    await newsApi.update(editForm.value.id, editForm.value);
    closeEditModal();
    fetchNews();
  } catch (error) {
    console.error("Lỗi cập nhật tin:", error);
  }
}

function handleSearch() {}

onMounted(fetchNews);
</script>
