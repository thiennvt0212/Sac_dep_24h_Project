<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
  >
    <div
      class="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
    >
      <h2 class="text-lg font-bold mb-4">Cập nhật danh mục</h2>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="mb-3">
            <label class="block mb-1 font-medium"
              >Tên danh mục <span class="text-red-500">*</span></label
            >
            <input
              v-model="form.name"
              type="text"
              class="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div class="mb-3">
            <label class="block mb-1 font-medium"
              >Mô tả <span class="text-red-500">*</span></label
            >
            <input
              v-model="form.description"
              type="text"
              class="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>
        <div class="flex gap-2 mt-4 justify-end">
          <button
            type="submit"
            class="bg-green-600 text-white px-4 py-2 rounded"
          >
            Lưu
          </button>
          <button
            type="button"
            class="bg-gray-300 px-4 py-2 rounded"
            @click="$emit('close')"
          >
            Đóng
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import categoryApi from "@/api/category";

const props = defineProps({
  visible: Boolean,
  category: Object,
});
const emit = defineEmits(["close", "updated"]);

const form = ref({
  name: "",
  description: "",
});

watch(
  () => props.category,
  (val) => {
    if (val) {
      form.value = {
        name: val.name || "",
        description: val.description || "",
      };
    }
  },
  { immediate: true }
);

async function handleSubmit() {
  try {
    const data = { ...form.value };
    ``;
    if (!props.category?.id) {
      alert("Không tìm thấy ID danh mục!");
      return;
    }
    await categoryApi.update(props.category.id, data);
    emit("updated");
    emit("close");
    alert("Cập nhật danh mục thành công!");
  } catch (err) {
    alert("Cập nhật danh mục thất bại!");
    console.error(err);
  }
}
</script>
