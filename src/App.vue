<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="nav-content">
    <van-button plain type="primary"
      ><RouterLink to="/">Home</RouterLink></van-button
    >
    <van-button plain type="primary">
      <RouterLink to="/about">About</RouterLink></van-button
    >
  </div>

  <div class="view-content">
    <RouterView />
  </div>
</template>

<style scoped>
.nav-content {
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
}
a {
  margin-left: 20px;
}
.view-content {
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
}
</style>
