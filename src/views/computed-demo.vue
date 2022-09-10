<template>
  <div>computed</div>
  <div>{{ fullName }}</div>
  <div>{{ firstName }}</div>
  <div>{{ lastName }}</div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const firstName = ref("John");
const lastName = ref("Doe");
const fullName = computed({
  get() {
    return firstName.value + "" + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
setTimeout(() => {
  fullName.value = "1 2";
}, 1000);
</script>
