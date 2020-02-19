import * as source1 from "./module1.js";
import * as source2 from "../module2.js";
import { source3 } from "./module3.js";
import { source4 } from "/module4";
import def, { sub1, sub2 } from "./module5/index.js";
import lib from "lib";
import { Component, render } from "https://cdn.pika.dev/preact/v8";
const module = import("./lazy-module.js");
export { default as module6, sub3 } from "./module6.js";
export * from "./module7.js";
export const a = "a";
export function b() {}
export default "";
