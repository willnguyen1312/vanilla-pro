import { foo } from "./A";

export function bar() {
  foo();
}

export function test() {
  console.log("test");
}

console.log("IN B");
