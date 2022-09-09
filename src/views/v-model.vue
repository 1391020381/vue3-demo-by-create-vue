<template>
  <p>{{ value }}</p>
  <div>
    <CustomVmodel v-model="value"></CustomVmodel>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CustomVmodel from "./custom-vmodel.vue";
const value = ref();
</script>
<style></style>
