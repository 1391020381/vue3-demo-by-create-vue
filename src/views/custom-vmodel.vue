<template>
  <input type="text" :value="modelValue" @input="handleInput" />
</template>
<script setup lang="ts">
// defineProps(["modelValue"]);
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) },
});
const emit = defineEmits(["update:modelValue"]);
const handleInput = (e: any) => {
  const value = e.target.value;
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit("update:modelValue", e.target.value);
};
</script>
<style></style>
