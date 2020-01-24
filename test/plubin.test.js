const pluginTester = require("babel-plugin-tester").default;
const plugin = require("../index");

pluginTester({
  plugin: plugin,
  tests: [
    `
import * as source from "./module1";
import { source2 } from "./module2.js";
import lib from "lib";
import { Component, render } from "https://cdn.pika.dev/preact/v8";
  `
  ]
});
