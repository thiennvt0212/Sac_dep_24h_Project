<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-lg shadow-lg w-[800px] p-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Cập nhật sản phẩm</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>

      <!-- Body: 2 columns -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Left column -->
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium">Tên sản phẩm</label>
            <input v-model="form.name" type="text" class="mt-1 w-full border rounded-md p-2" />
          </div>
          <div>
            <label class="block text-sm font-medium">Giá</label>
            <input v-model="form.price" type="number" class="mt-1 w-full border rounded-md p-2" />
          </div>
          <div>
            <label class="block text-sm font-medium">Mã</label>
            <input v-model="form.sku" type="text" class="mt-1 w-full border rounded-md p-2" />
          </div>
          <div>
            <label class="block text-sm font-medium">Mô tả</label>
            <textarea v-model="form.description" rows="4" class="mt-1 w-full border rounded-md p-2"></textarea>
          </div>
        </div>

        <!-- Right column -->
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium">Danh mục</label>
            <select v-model="form.category" class="mt-1 w-full border rounded-md p-2">
              <option disabled value="">-- Chọn danh mục --</option>
              <option v-for="item in category" :key="item.id" :value="String(item.id)">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium">Số lượng</label>
            <input v-model="form.quantity" type="number" class="mt-1 w-full border rounded-md p-2" />
          </div>
          <div>
            <label class="block text-sm font-medium">Ảnh sản phẩm (link)</label>
            <input v-model="form.image" type="text" placeholder="Nhập URL ảnh" class="mt-1 w-full border rounded-md p-2" />
            <div v-if="form.image" class="mt-2">
              <img :src="form.image" alt="Preview" class="max-h-40 rounded border" />
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end">
        <button
          @click="handleSubmit"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Cập nhật
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import productApi from '@/api/product';
import categoryApi from '@/api/category';

const props = defineProps({
  visible: Boolean,
  product: Object,
});
const emit = defineEmits(['close', 'updated']);

const category = ref([]);

const form = ref({
  name: "",
  description: "",
  price: "",
  sku: "",
  category: "",
  quantity: "",
  image: "",
});

// Khi prop product thay đổi → fill form
watch(
  () => props.product,
  (val) => {
    if (val) {
      form.value = {
        name: val.name || "",
        description: val.description || "",
        price: val.price || "",
        sku: val.sku || "",
        category: String(val.category) || "",
        quantity: val.quantity || "",
        image: val.image || "",
      };
    }
  },
  { immediate: true }
);

async function handleSubmit() {
  try {
    const data = { ...form.value };
    await productApi.update(props.product.id, data);
    emit("updated");
    emit("close");
    alert("Cập nhật sản phẩm thành công!");
  } catch (err) {
    alert("Cập nhật sản phẩm thất bại!");
    console.error(err);
  }
}

onMounted(async () => {
  category.value = await categoryApi.getAll();
});
</script>
