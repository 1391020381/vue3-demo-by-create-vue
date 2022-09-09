<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <van-row>
    <van-col><RouterLink to="/">Hello-World</RouterLink></van-col>
    <van-col><RouterLink to="/lifeCycle">lifeCycle</RouterLink></van-col>
    <van-col><RouterLink to="/nex-tick">nex-tick</RouterLink></van-col>
    <van-col><RouterLink to="/Teleport">Teleport</RouterLink></van-col>
    <van-col><RouterLink to="vbind-css">vbind-css</RouterLink></van-col>
    <van-col
      ><RouterLink to="/ref-family-bucket"
        >ref-family-bucket</RouterLink
      ></van-col
    >
    <van-col>
      <RouterLink to="/ref-deconstruct">ref-deconstruct Ref解构</RouterLink>
    </van-col>
    <van-col>
      <RouterLink to="stopPropagation">stopPropagation</RouterLink>
    </van-col>
  </van-row>
  <van-row>
    <RouterView />
  </van-row>
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
