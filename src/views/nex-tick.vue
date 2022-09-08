<template>
  <div class="about">
    <van-button plain type="primary" id="counter" @click="increment">{{
      count
    }}</van-button>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from "vue";
const count = ref(0);
function increment() {
  count.value++;
  const textContent = document.getElementById("counter")?.textContent;
  console.log(textContent);
  nextTick(() => {
    const textContent = document.getElementById("counter")?.textContent;
    console.log("nextTick:", textContent);
  });
}
</script>
<style></style>
