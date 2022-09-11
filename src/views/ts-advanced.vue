<template>
  <div>ts-advanced</div>
</template>
<script setup lang="ts">
// 类型别名
// 字符串字面量类型
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event: EventNames) {
  console.log("xxxx");
}
// 元组
// 数组合并了相同类型的对象,而元组 Tuple合并了不同类型的对象。

// 枚举
enum Days {
  Sun = 7,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days.Fri);
</script>
<style></style>
