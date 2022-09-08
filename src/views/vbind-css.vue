<template>
  <p>hello</p>
</template>
<script setup lang="ts">
import { ref } from "vue";
const theme = ref("red");
const colors = ["blue", "yellow", "red", "green"];
setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)];
}, 1000);
</script>
<style scoped>
p {
  color: v-bind(theme);
}
</style>
