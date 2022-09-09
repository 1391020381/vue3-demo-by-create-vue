<template>
  <div>
    <h1>ref-deconstruct</h1>
    <p>count:{{ count }}</p>
    <p>reactive:{{ state.count }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
const count = ref(0);
const state = reactive({
  count,
});
console.log(state.count); // 0
state.count = 1;
console.log(count.value); // 1

const otherCount = ref(2);
// state.count = otherCount;
</script>
<style></style>
