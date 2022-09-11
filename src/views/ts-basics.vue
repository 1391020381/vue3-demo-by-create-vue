<template>
  <div>ts-basics</div>
</template>
<script setup lang="ts">
// 基本类型  类型推论
const isDone = false;
const isNumber = 2;
const isString = "3";
const unusable: void = undefined;
const u = undefined;
const n = null;
// isDone = 2;
console.log(isDone);
// 联合类型  联合类型 使用 ｜ 分隔每个类型
// 联合类型只能访问 共有属性
function getLength(something: string | number): number {
  return typeof something === "string" ? something.length : 0;
}
// 对象的类型 - 接口
//  可选属性  任意属性  只读属性
interface IPerson {
  readonly name: string;
  age?: number; // 可选属性
  [propName: string]: number | string | undefined; // 任意属性
}
const tom: IPerson = {
  name: "Tom",
  age: 25,
  gender: "male",
};
// tom.name = "23243";
console.log("对象类型 IPerson:", tom);

// 数组类型

// 类型 + 方括号
const stringArray: string[] = ["1", "2"];
// 数组泛型
// Array<elemType>
const numberArray: number[] = [1, 2, 3, 4, 5, 6];
// 用接口表示数组
interface INumberArray {
  [index: number]: number;
}
// INumberArray表示 只要索引的类型是数字时,那么值的类型必须是数字

// 类数组
// function sum() {
//   const args: {
//     [index: number]: number;
//     length: number;
//     callee: Function;
//   } = arguments;
// }
// 函数的类型
// 函数声明与函数表达式
// 在Ts中的类型定义中 => 用来表示函数的定义,
// 左边是输入类型 需要用括号括起来,右边是输出类型。
function sum(x: number, y: number): number {
  return x + y;
}
const mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}
const mySearch: SearchFunc = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};
// 可选参数 默认参数 剩余参数
// 可选参数后面不允许再出现必需参数
// Ts会将添加了默认值的参数识别为可选参数
function buildName(firstName: string, lastName = "cat") {
  if (lastName) {
    return firstName + "" + lastName;
  } else {
    return firstName;
  }
}
const tomcat = buildName("tom", "cat");
const aom = buildName("tom");
// 函数重载
// 重载允许一个函数接受不同数量或类型的参数时,作出不同的处理
// let tomcat = 343333;
// function buildName() {
//   console.log("23423");
// }
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join());
  } else if (typeof x === "string") {
    return x.split("").reverse().join();
  }
}
// 类型断言 as
// 申明文件
// 内置对象
</script>
<style></style>
