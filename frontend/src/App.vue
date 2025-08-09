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
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <AdminHeader class="h-16 flex-shrink-0" />
    
    <div class="flex flex-1">
      <!-- Sidebar -->
      <AdminSidebar  />

      <!-- Main content -->
      <main class="flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>
  </div>
</template>

<style scoped></style>
