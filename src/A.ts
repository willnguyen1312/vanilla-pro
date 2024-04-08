import { bar, test } from "./B";

export function foo() {
  bar();
}

test();
console.log("IN A");
