<template>
  <div>shallowRef</div>
</template>
<script setup lang="ts">
import { shallowRef, watch } from "vue";
const state = shallowRef({
  count: 1,
});
watch(
  state,
  () => {
    console.log("State,count Update");
  },
  { deep: true }
);
// state.value.count = 2;
state.value = {
  count: 3,
};
</script>
<style></style>
