<template>
  <div>props</div>
</template>
<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default() {
      return "default";
    },
    validator(value: string) {
      return ["primary", "ghost", "dashed", "link", "text", "default"].includes(
        value
      );
    },
  },
});
</script>
