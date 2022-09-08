<template>
  <div>
    <van-button type="primary" @click="show = true">Teleport</van-button>
    <teleport to="body">
      <div v-if="show" class="modal">
        <p>{{ msg }}</p>
        <van-button type="primary" @click="show = false">Teleport</van-button>
      </div>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const msg = ref("Hello World");
const show = ref(false);
</script>
<style>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
