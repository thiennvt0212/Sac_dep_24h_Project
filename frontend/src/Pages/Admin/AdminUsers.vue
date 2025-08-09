<template>
  <div>
    <main
      class="flex-1 transition-all duration-300 ease-in-out bg-gray-50"
      :class="sidebarOpen ? 'ml-0 md:ml-0' : 'ml-0'"
    >
      <!-- <div class="flex gap-3 p-6">
        <button
          class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
          @click="showModal = true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Thêm mới
        </button>
      </div> -->
      <div class="flex gap-3 p-6">
        <button
          class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
          @click="showModal = true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Thêm mới
        </button>
        <div class="flex gap-3 flex-1 justify-end">
          <input
            v-model="searchText"
            type="text"
            placeholder="Tìm kiếm tên đăng nhập, email, họ tên..."
            class="border px-3 py-2 rounded-lg text-sm w-64"
          />
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
            @click="handleSearch"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
            </svg>
            Tìm kiếm
          </button>
        </div>
      </div>
      <!-- Table -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden p-6">
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Tên đăng nhập</th>
                <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Họ tên</th>
                <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Quyền</th>
                <th class="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition-colors">
                <td class="px-4 py-3 text-gray-700">{{ user.id }}</td>
                <td class="px-4 py-3 text-amber-600 font-medium">{{ user.username }}</td>
                <td class="px-4 py-3">{{ user.email }}</td>
                <td class="px-4 py-3">{{ user.fullName }}</td>
                <td class="px-4 py-3">{{ user.role }}</td>
                <td class="px-4 py-3 flex flex-row">
                  <button
                    class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium bg-green-400 hover:opacity-75"
                    @click="openEditUser(user)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    Cập nhật
                  </button>
                  <button
                    class="flex flex-row pt-[8px] pr-[18px] pb-[8px] pl-[18px] mt-4 mb-4 ml-2 mr-2 rounded-md font-medium bg-red-600 hover:opacity-75 text-white"
                    @click="deleteUser(user.id)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    Xoá
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="searchNotFound" class="text-center text-red-500 py-4">
            Không tìm thấy tài khoản phù hợp.
          </div>
          <CreateUserModal
            :visible="showModal"
            @close="showModal = false"
            @created="loadUsers"
          />
          <EditUserModal
            :visible="showEditModal"
            :user="editingUser"
            @close="showEditModal = false"
            @updated="loadUsers"
          />
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import userApi from "@/api/userApi";
import CreateUserModal from "../Admin/Components/CreateUserModal.vue";
import EditUserModal from "../Admin/Components/EditUserModal.vue"; // Thêm dòng này

const sidebarOpen = ref(true);
const users = ref([]);
const showModal = ref(false);
const showEditModal = ref(false);
const editingUser = ref(null);
const activeTab = ref("products");

onMounted(async () => {
  await loadUsers();
});

async function loadUsers() {
  try {
    users.value = await userApi.getAll();
  } catch (err) {
    console.error("Lỗi khi load user:", err);
  }
}

async function deleteUser(id) {
  if (!confirm("Bạn có chắc chắn muốn xoá tài khoản này?")) return;
  try {
    await userApi.delete(id);
    await loadUsers();
    alert("Xoá thành công!");
  } catch (error) {
    console.error("Lỗi khi xoá user:", error);
    alert("Xoá thất bại!");
  }
}

function openEditUser(user) {
  editingUser.value = { ...user };
  showEditModal.value = true;
}

const searchText = ref("");
const searchNotFound = ref(false);

async function handleSearch() {
  const text = searchText.value.trim().toLowerCase();
  if (!text) {
    await loadUsers();
    searchNotFound.value = false;
    return;
  }
  const filtered = users.value.filter(
    u =>
      u.username?.toLowerCase().includes(text) ||
      u.email?.toLowerCase().includes(text) ||
      u.fullName?.toLowerCase().includes(text)
  );
  users.value = filtered;
  searchNotFound.value = filtered.length === 0;
}
</script>