// <<<<<<< HEAD
// import { createRouter, createWebHistory } from 'vue-router'
// import AccountView from '../Pages/Account.vue'
// import ContactView from '../Pages/contact.vue'
// import HomeView from '../Pages/Home.vue'
// import IntroduceView from '../Pages/Introduce.vue'
// import NewsView from '../Pages/news.vue'
// import ProductsView from '../Pages/Products.vue'
// import AdminView from '../Pages/Admin.vue' 

// =======
import { createRouter, createWebHistory } from "vue-router";
import AccountView from "../Pages/Account.vue";
import ContactView from "../Pages/contact.vue";
import HomeView from "../Pages/Home.vue";
import IntroduceView from "../Pages/Introduce.vue";
import NewsView from "../Pages/news.vue";
import ProductsView from "../Pages/Products.vue";
import AdminView from '../Pages/Admin.vue' 
import ProductDetail from "@/Pages/ProductDetail.vue";

// admin

import AdminCategory from '@/Pages/Admin/AdminCategory.vue';
import AdminNews from '@/Pages/Admin/AdminNews.vue';
import AdminProduct from '@/Pages/Admin/AdminProduct.vue';
import AdminUsers from '@/Pages/Admin/AdminUsers.vue';


const routes = [

  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/introduce",
    name: "introduce",
    component: IntroduceView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/account",
    name: "account",
    component: AccountView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },

  {
    path: "/products/:name",
    name: "product-details",
    component: ProductDetail,
  },


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
