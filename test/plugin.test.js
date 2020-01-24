const pluginTester = require("babel-plugin-tester").default;
const { stripIndent } = require("common-tags");
const plugin = require("../index");

pluginTester({
  plugin: plugin,
  tests: [
    {
      code: stripIndent`
        import * as source1 from "./module1";
        import * as source2 from "../module2";
        import { source3 } from "./module3.js";
        import { source4 } from "/module4";
        import def, { sub1, sub2 } from "./module5/index";
        import lib from "lib";
        import { Component, render } from "https://cdn.pika.dev/preact/v8";
        const module = import("./lazy-module");
      `,
      output: stripIndent`
        import * as source1 from "./module1.js";
        import * as source2 from "../module2.js";
        import { source3 } from "./module3.js";
        import { source4 } from "/module4";
        import def, { sub1, sub2 } from "./module5/index.js";
        import lib from "lib";
        import { Component, render } from "https://cdn.pika.dev/preact/v8";
        const module = import("./lazy-module.js");
      `
    }
  ]
});
