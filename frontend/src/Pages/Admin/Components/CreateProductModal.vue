<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-lg shadow-lg w-[800px] p-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Tạo sản phẩm mới</h2>
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
            <input v-model="form.image" class="mt-1 w-full border rounded-md p-2" />
            <div v-if="form.image" class="mt-2">
              <img :src="form.image" alt="Preview" class="max-h-40 rounded border" />
            </div>
          </div>          
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end">
        <button @click="createProduct"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Tạo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, nextTick, watch } from 'vue';
import productApi from '@/api/product';
import categoryApi from '@/api/category';

const props = defineProps({
  visible: Boolean
});
const emit = defineEmits(['close', 'created']);

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

watch(() => props.visible, (newVal) => {
  if (newVal) {
    Object.assign(form, {
      name: '',
      description: '',
      price: '',
      sku: '',
      category: '',
      quantity: '',
      image: null
    });
    preview.value = null;
  }
});

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.image = file;
    preview.value = URL.createObjectURL(file);
  }
};

const createProduct = async () => {

  await nextTick();
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

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    await productApi.create(formData); // productApi.create phải set Content-Type = multipart/form-data

    emit('created');
    emit('close');
  } catch (error) {
    console.error('Lỗi tạo sản phẩm:', error.response?.data || error);
  }
};

onMounted(async () => {
  category.value = await categoryApi.getAll();
});
</script>

