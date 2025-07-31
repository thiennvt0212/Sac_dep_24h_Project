<script setup>
import Header from "./layouts/Header.vue"
import Navbar from "./layouts/Navbar.vue"
import Footer from "./layouts/Footer.vue"
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer /> <!-- Phải có dòng này -->
  </div>
</template>
