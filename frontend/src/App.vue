<script setup>
import { useRoute } from 'vue-router'
import Header from "./layouts/Header.vue";
import Navbar from "./layouts/Navbar.vue";
import Footer from "./layouts/Footer.vue";
import AdminHeader from "./Pages/Admin/Layout/adminHeader.vue";
import AdminSidebar from "./Pages/Admin/Layout/adminNavbar.vue";


const route = useRoute()
</script>

<template>
  <div>
    <template v-if="!route.path.startsWith('/admin')">
      
      <Header />
      <Navbar />
      <router-view />
      <Footer />
    </template>
    <template v-else>
      <AdminHeader />
      <AdminSidebar />
      <router-view />
      
    </template>
  </div>
</template>

<style scoped></style>
