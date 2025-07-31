<script setup>

import Header from "./layouts/Header.vue";
import Navbar from "./layouts/Navbar.vue";
import Footer from "./layouts/Footer.vue";
</script>

<template>
  
  <Header> </Header>
  <Navbar></Navbar>
    <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped></style>
