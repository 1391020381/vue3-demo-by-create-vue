<template>
  <div>
    <h1>ref-family-bucket</h1>
    <p>ref reactive toRef toRefs</p>
    <p>
      <van-button plain type="primary" @click="update(count - 1)">-</van-button>
      {{ initial }}
      <van-button plain type="primary" @click="update(count + 1)">+</van-button>
    </p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, toRef, toRefs, isRef, reactive, type Ref } from "vue";
const initial = ref(10);
const count = ref(0);
const arr = ref([1, 2, 3, 4]);
setTimeout(() => {
  arr.value[1] = 55555555;
}, 1000);
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
const { foo, bar } = toRefs(state);

foo.value++;
console.log(state.foo === 2);

state.foo++;
console.log(foo.value === 3);
</script>
<style></style>
