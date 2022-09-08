<template>
  <div>
    <h1>ref-family-bucket</h1>
    <p>
      <van-button plain type="primary" @click="update(count - 1)">-</van-button>
      {{ initial }}
      <van-button plain type="primary" @click="update(count + 1)">+</van-button>
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref, isRef, reactive, type Ref } from "vue";
const initial = ref(10);
const count = ref(0);

function update(value: number) {
  initial.value = value;
}
console.log(isRef(count) ? 1 : 0);

function initialCount(value: number | Ref<number>) {
  const temp = isRef(value) ? value.value : value;
  console.log(temp === 10);
}
initialCount(initial);

const state = reactive({
  foo: 1,
  bar: 2,
});
const fooRef = ref(state.foo);

fooRef.value++;
console.log(state.foo === 2);

state.foo++;
console.log(fooRef.value === 3);
</script>
<style></style>
