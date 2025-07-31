import { createRouter, createWebHistory } from "vue-router";


import About from "../pages/about.vue";
import Shop from "../pages/shop.vue";
import Contact from "../pages/contact.vue";
import Blog from "../pages/blog.vue";

const routes = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop,
    }
    ,
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    }
    ,
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;