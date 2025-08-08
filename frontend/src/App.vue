<script setup>
import { useRoute } from 'vue-router'
import Header from "./layouts/Header.vue";
import Navbar from "./layouts/Navbar.vue";
import Footer from "./layouts/Footer.vue";

const route = useRoute()
</script>

<template>
  <div>
    <template v-if="route.path !== '/admin'">
      <Header />
      <Navbar />
      <router-view />
      <Footer />
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<style scoped></style>

