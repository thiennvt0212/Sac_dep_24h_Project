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
            <label class="block text-sm font-medium">Ảnh sản phẩm</label>
            <input type="file" @change="onFileChange" accept="image/*" class="mt-1 w-full" />
          </div>
          <!-- Preview nhỏ -->
          <div class="flex justify-center border border-dashed rounded-md p-2">
            <img v-if="preview" :src="preview" alt="Preview" class="max-h-24 object-contain" />
            <span v-else class="text-gray-400 text-sm">Preview ảnh</span>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end">
        <button @click="updateProduct"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Cập nhật
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, onMounted } from 'vue';
import productApi from '@/api/product';
import categoryApi from '@/api/category';

const props = defineProps({
  visible: Boolean,
  product: {
    type: Object,
    default: () => ({})
  }
});
const emit = defineEmits(['close', 'updated']);

const category = ref([]);
const preview = ref(null);

const form = reactive({
  name: '',
  description: '',
  price: '',
  sku: '',
  category: '',
  quantity: '',
  image: null
});

// Khi prop product thay đổi hoặc modal mở thì fill dữ liệu
watch(
  () => props.product,
  (val) => {
    if (val && val.id) {
      form.name = val.name || '';
      form.description = val.description || '';
      form.price = val.price || '';
      form.sku = val.sku || '';
      form.category = val.category || '';
      form.quantity = val.quantity || '';
      preview.value = typeof val.image === 'string' ? val.image : null;
      form.image = null; // reset để khi upload mới
    }
  },
  { immediate: true }
);

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.image = file;
    preview.value = URL.createObjectURL(file);
  }
};

const updateProduct = async () => {
  if (!props.product?.id) {
    alert('Không tìm thấy ID sản phẩm!');
    return;
  }
  try {
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', Number(form.price));
    formData.append('sku', form.sku);
    formData.append('category', form.category);
    formData.append('quantity', Number(form.quantity));
    if (form.image) {
      formData.append('image', form.image);
    }

    await productApi.update(props.product.id, formData); // phải hỗ trợ multipart/form-data
    emit('updated');
    emit('close');
  } catch (error) {
    console.error('Lỗi cập nhật sản phẩm:', error.response?.data || error);
  }
};

onMounted(async () => {
  category.value = await categoryApi.getAll();
});
</script>
