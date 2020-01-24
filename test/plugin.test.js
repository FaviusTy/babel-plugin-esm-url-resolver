const pluginTester = require("babel-plugin-tester").default;
const { stripIndent } = require("common-tags");
const plugin = require("../index");

pluginTester({
  plugin: plugin,
  tests: [
    {
      code: stripIndent`
        import * as source from "./module1";
        import { source2 } from "./module2.js";
        import lib from "lib";
        import { Component, render } from "https://cdn.pika.dev/preact/v8";
      `,
      output: stripIndent`
        import * as source from "./module1.js";
        import { source2 } from "./module2.js";
        import lib from "lib";
        import { Component, render } from "https://cdn.pika.dev/preact/v8";
      `
    }
  ]
});
