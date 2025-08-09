<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <h2 class="text-lg font-bold mb-4">Cập nhật tài khoản</h2>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="mb-3">
            <label class="block mb-1 font-medium">Email <span class="text-red-500">*</span></label>
            <input v-model="form.email" type="email" class="w-full border rounded px-3 py-2" required readonly/>
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Tên đăng nhập <span class="text-red-500">*</span></label>
            <input v-model="form.username" type="text" class="w-full border rounded px-3 py-2" required readonly/>
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Mật khẩu (Để trống nếu không đổi)</label>
            <input v-model="form.password" type="password" class="w-full border rounded px-3 py-2" minlength="6" />
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
          <div class="mb-3 md:col-span-2">
            <label class="block mb-1 font-medium">Quyền <span class="text-red-500">*</span></label>
            <select v-model="form.role" class="w-full border rounded px-3 py-2">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div class="flex gap-2 mt-4 justify-end">
          <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Lưu</button>
          <button type="button" class="bg-gray-300 px-4 py-2 rounded" @click="$emit('close')">Đóng</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import userApi from "@/api/userApi";

const props = defineProps({
  visible: Boolean,
  user: Object,
});
const emit = defineEmits(["close", "updated"]);

const form = ref({
  email: "",
  username: "",
  password: "",
  fullName: "",
  address: "",
  phone: "",
  country: "",
  companyName: "",
  role: "user",
});

watch(
  () => props.user,
  (val) => {
    if (val) {
      form.value = {
        email: val.email || "",
        username: val.username || "",
        password: "",
        fullName: val.fullName || "",
        address: val.address || "",
        phone: val.phone || "",
        country: val.country || "",
        companyName: val.companyName || "",
        role: val.role || "user",
      };
    }
  },
  { immediate: true }
);

async function handleSubmit() {
  try {
    const data = { ...form.value };
    if (!data.password) delete data.password; // Không gửi password nếu không đổi
    await userApi.update(props.user.id, data);
    emit("updated");
    emit("close");
    alert("Cập nhật tài khoản thành công!");
  } catch (err) {
    alert("Cập nhật tài khoản thất bại!");
    console.error(err);
  }
}
</script>