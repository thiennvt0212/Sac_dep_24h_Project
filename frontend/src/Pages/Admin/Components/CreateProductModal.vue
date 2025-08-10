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
              <option v-for="item in category" :key="item._id" :value="String(item._id)">
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
        <button @click="createProduct"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Tạo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import categoryApi from '@/api/category';

export default {
  props: {
    visible: Boolean,
    categories: Array // nhận danh sách danh mục từ parent
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
        price: null,
        sku: "",
        category: "",
        quantity: null,
        image: null
      },
      preview: null
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.form.image = file;
        this.preview = URL.createObjectURL(file);
      }
    },
    async createProduct() {
      try {
        const formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("description", this.form.description);
        formData.append("price", this.form.price);
        formData.append("sku", this.form.sku);
        formData.append("category", this.form.category);
        formData.append("quantity", this.form.quantity);
        if (this.form.image) {
          formData.append("image", this.form.image);
        }

        await axios.post("http://localhost:3000/api/products", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });

        alert("Tạo sản phẩm thành công!");
        this.$emit("close");
      } catch (error) {
        console.error(error);
        alert("Có lỗi xảy ra khi tạo sản phẩm");
      }
    }
  }
};
</script>


<script setup>
import { onMounted, reactive, ref } from 'vue'
import productApi from '@/api/product'


const category = ref([]);
const products = ref([]);

const props = defineProps({
  visible: Boolean
})
const emit = defineEmits(['close', 'created'])

const form = reactive({
  name: '',
  description: '',
  price: '',
  sku: ''
})

const createProduct = async () => {
  try {
    await productApi.create(form)
    emit('created') // gọi loadProducts bên ngoài
    emit('close')
  } catch (error) {
    console.error('Lỗi tạo sản phẩm:', error)
  }
}

onMounted(async () => {
  await loadCategory();
  await loadProducts();
});

async function loadProducts() {
  try {
    products.value = await productApi.getAll();
  } catch (err) {
    console.error("Lỗi khi load sản phẩm:", err);
  }
}

async function loadCategory() {
  try {
    category.value = await categoryApi.getAll();
  } catch (err) {
    console.error("Lỗi khi load loại sản phẩm:", err);
  }
}
</script>
