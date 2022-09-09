<template>
  <div @click="click1($event)" class="out">
    <div @click.stop="click2()" class="inner">click me</div>
  </div>
</template>
<script setup lang="ts">
const click1 = (e: Event) => {
  e.stopPropagation();
  console.log("click1");
};
const click2 = () => {
  console.log("click2");
};
</script>
<style>
.out {
  width: 200px;
  height: 200px;
  background: #333;
  position: relative;
  cursor: pointer;
}
.inner {
  width: 100px;
  height: 100px;
  background: #eee;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
</style>
