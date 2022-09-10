<template>
  <div>watch</div>
  <p>{{ count }}</p>
  <p ref="eleRef">{{ age }}</p>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from "vue";
const count = ref(0);

const unWatchCount = watch(count, (newCount, oldCount, onCleanup) => {
  console.log("Only trigged once", newCount, oldCount);
  onCleanup(() => {
    console.log("onCleanup==========");
  });
  unWatchCount();
});
count.value = 1;

setTimeout(() => (count.value = 2));

const state = reactive({
  count: 0,
});
watch(
  state,
  (newState, oldState) => {
    console.log("The state.count updated", newState, oldState);
  }
  //   {
  //     deep: true,
  //   }
);
state.count = 2;

const eleRef = ref<HTMLInputElement | null>(null);
const age = ref(2);
watch(
  age,
  (newAge, oldAge) => {
    console.log(newAge, oldAge, "eleRef:", eleRef.value);
  },
  {
    flush: "post",
  }
);
age.value = 18;
</script>
<style></style>
