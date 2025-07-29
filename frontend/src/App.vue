<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./layouts/Header.vue";
</script>

<template>
  <Header>

  </Header>

  <main>
    <div >
      Chào mừng đến với sắc đẹp 24h
    </div>
    <nav>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/blog">BLog</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
    </nav>
    
    <RouterView />
  </main>
</template>

<style scoped></style>
