import * as source1 from "./module1";
import * as source2 from "../module2";
import { source3 } from "./module3.js";
import { source4 } from "/module4";
import def, { sub1, sub2 } from "./module5/index";
import lib from "lib";
import { Component, render } from "https://cdn.pika.dev/preact/v8";
const module = import("./lazy-module");
export { default as module6, sub3 } from "./module6";
export * from "./module7";
export const a = "a";
export function b() {}
export default "";
