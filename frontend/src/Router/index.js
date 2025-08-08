import { createRouter, createWebHistory } from "vue-router";
import AccountView from "../Pages/Account.vue";
import ContactView from "../Pages/Contact.vue";
import HomeView from "../Pages/Home.vue";
import IntroduceView from "../Pages/Introduce.vue";
import NewsView from "../Pages/news.vue";
import ProductsView from "../Pages/Products.vue";
import ProductDetail from "@/Pages/ProductDetail.vue";

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
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/products/:name",
    name: "product-details",
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
