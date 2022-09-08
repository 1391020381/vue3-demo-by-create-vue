<template>
  <main>
    {{ count }}
  </main>
</template>
<script setup lang="ts">
import { onMounted, inject, ref } from "vue";
const timer = ref(0);
const count = ref(0);
onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++;
  }, 1000);
});
</script>
