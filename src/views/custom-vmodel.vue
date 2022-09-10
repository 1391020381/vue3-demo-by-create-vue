<template>
  <input type="text" :value="modelValue" @input="handleInput" />
</template>
<script setup lang="ts">
// defineProps(["modelValue"]);
const props = defineProps({
  modelValue: String,
  modelModifiers: {
    default: () => {
      return {
        capitalize: "",
      };
    },
  },
});
const emit = defineEmits(["update:modelValue"]);
const handleInput = (e: Event) => {
  let value = (e.target as HTMLInputElement).value;
  if (props.modelModifiers.capitalize) {
    // value = value.charAt(0).toUpperCase() + value.slice(1);
    value = value.toUpperCase();
  }
  emit("update:modelValue", value);
};
</script>
<style></style>
