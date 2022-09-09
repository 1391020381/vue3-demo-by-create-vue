<template>
  <div>
    <h1>Responsiveness lost</h1>
    <p>Vue.js 我们解构/拓展 响应式对象 但它们会失去响应式</p>

    <p>
      <span @click="update(count - 1)">-</span>
      {{ count }}
      <span @click="update(count + 1)">+</span>
    </p>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRefs } from "vue";
function useCount() {
  const state = reactive({
    count: 0,
  });
  function update(value: number) {
    state.count = value;
  }
  return {
    ...toRefs(state),
    update,
  };
}
const { count, update } = useCount();
</script>
<style></style>
