<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <h2 class="text-lg font-bold mb-4">Thêm tài khoản mới</h2>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="mb-3">
            <label class="block mb-1 font-medium">Email <span class="text-red-500">*</span></label>
            <input v-model="form.email" type="email" class="w-full border rounded px-3 py-2" required />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Tên đăng nhập <span class="text-red-500">*</span></label>
            <input v-model="form.username" type="text" class="w-full border rounded px-3 py-2" required />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Mật khẩu <span class="text-red-500">*</span></label>
            <input v-model="form.password" type="password" class="w-full border rounded px-3 py-2" required minlength="6" />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Họ tên <span class="text-red-500">*</span></label>
            <input v-model="form.fullName" type="text" class="w-full border rounded px-3 py-2" required />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Địa chỉ</label>
            <input v-model="form.address" type="text" class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Số điện thoại</label>
            <input v-model="form.phone" type="text" class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Quốc gia</label>
            <input v-model="form.country" type="text" class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Tên công ty</label>
            <input v-model="form.companyName" type="text" class="w-full border rounded px-3 py-2" />
          </div>
          <!-- <div class="mb-3 md:col-span-2 w-[49%]">
            <label class="block mb-1 font-medium">Quyền <span class="text-red-500">*</span></label>
            <select v-model="form.role" class="w-full border rounded px-3 py-2">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div> -->
          <div class="mb-3 md:col-span-2 w-[49%] relative">
            <label class="block mb-1 font-medium">
              Quyền <span class="text-red-500">*</span>
            </label>
            <select v-model="form.role" 
                    class="w-full border rounded px-3 py-2 appearance-none pr-10">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <!-- Icon mũi tên -->
            <svg class="w-4 h-4 absolute right-3 top-[70%] -translate-y-1/2 pointer-events-none text-gray-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div class="flex gap-2 mt-4 justify-end">
          <button type="submit" class="bg-amber-600 text-white px-4 py-2 rounded">Thêm</button>
          <button type="button" class="bg-gray-300 px-4 py-2 rounded" @click="$emit('close')">Đóng</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import userApi from "@/api/userApi";

const props = defineProps({
  visible: Boolean,
});
const emit = defineEmits(["close", "created"]);

const form = ref({
  email: "",
  username: "",
  password: "",
  fullName: "",
  address: "",
  phone: "",
  country: "",
  companyName: "",
  role: "user", // mặc định là người dùng
});

async function handleSubmit() {
  try {
    await userApi.create(form.value);
    emit("created");
    emit("close");
    alert("Tạo tài khoản thành công!");
    form.value = {
      email: "",
      username: "",
      password: "",
      fullName: "",
      address: "",
      phone: "",
      country: "",
      companyName: "",
      role: "",
    };
  } catch (err) {
    alert("Tạo tài khoản thất bại!");
    console.error(err);
    }
}
</script>