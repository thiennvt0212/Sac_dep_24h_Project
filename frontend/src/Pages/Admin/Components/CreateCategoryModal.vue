<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black"
  >
    <div class="bg-white rounded-lg shadow-lg w-[800px] p-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Tạo danh mục mới</h2>
        <button
          @click="$emit('close')"
          class="text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>

      <!-- Body: 2 columns -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Left column -->
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium">Tên danh mục</label>
            <input
              v-model="form.name"
              type="text"
              class="mt-1 w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium">Mô tả</label>
            <textarea
              v-model="form.description"
              rows="4"
              class="mt-1 w-full border rounded-md p-2"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end">
        <button
          @click="createCategory"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Tạo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import categoryApi from "@/api/category";

const props = defineProps({
  visible: Boolean,
});
const emit = defineEmits(["close", "created"]);

const form = reactive({
  name: "",
  description: "",
});
watch(
  () => props.visible,
  (isOpen) => {
    if (isOpen) {
      form.name = "";
      form.description = "";
    }
  }
);

const createCategory = async () => {
  try {
    await categoryApi.create(form);
    emit("created"); // gọi loadCategories bên ngoài
    emit("close");
  } catch (error) {
    console.error("Lỗi tạo sản phẩm:", error);
  }
};
</script>
