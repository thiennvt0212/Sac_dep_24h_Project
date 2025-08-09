
import { createRouter, createWebHistory } from "vue-router";


// admin

import AdminCategory from '@/Pages/Admin/AdminCategory.vue';
import AdminNews from '@/Pages/Admin/AdminNews.vue';
import AdminProduct from '@/Pages/Admin/AdminProduct.vue';
import AdminUsers from '@/Pages/Admin/AdminUsers.vue';


const routes = [
  { path: '/admin/product', name: 'admin-product', component: AdminProduct },
  { path: '/admin/category', name: 'admin-category', component: AdminCategory },
  { path: '/admin/news', name: 'admin-news', component: AdminNews },
  { path: '/admin/users', name: 'admin-users', component: AdminUsers },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
