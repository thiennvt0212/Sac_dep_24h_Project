<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex-1 p-4">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import productApi from "@/api/product";
import CreateProductModal from "./Admin/Components/CreateProductModal.vue";

const sidebarOpen = ref(true);
const products = ref([]);
const activeTab = ref("products");
const showModal = ref(false);
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  await loadProducts();
});

async function loadProducts() {
  try {
    products.value = await productApi.getAll();
  } catch (err) {
    console.error("Lỗi khi load sản phẩm:", err);
  }
}

async function deleteProduct(id) {
  if (!confirm("Bạn có chắc chắn muốn xoá?")) return;
  try {
    await productApi.delete(id);
    await loadProducts();
    alert("Xoá thành công!");
  } catch (error) {
    console.error("Lỗi khi xoá sản phẩm:", error);
    alert("Xoá thất bại!");
  }
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

// const getTabTitle = (tab) => {
//   const titles = {
//     products: "Quản lý sản phẩm",
//     inventory: "Quản lý kho hàng",
//     sales: "Quản lý bán hàng",
//     orders: "Quản lý đơn hàng",
//     customers: "Quản lý khách hàng",
//   };
//   return titles[tab] || "Trang chủ";
// };

const tabs = [
  { name: "admin-product", label: "Quản lý sản phẩm" },
  { name: "admin-category", label: "Quản lý loại sản phẩm" },
  { name: "admin-news", label: "Quản lý tin tức" },
  { name: "admin-users", label: "Quản lý tài khoản" },
];

const currentTab = route.name; // lấy tab hiện tại từ URL

const goToTab = (name) => {
  router.push({ name });
};
</script>
