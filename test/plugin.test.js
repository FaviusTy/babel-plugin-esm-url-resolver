const path = require("path");
const pluginTester = require("babel-plugin-tester").default;
const { stripIndent } = require("common-tags");
const plugin = require("../index");

pluginTester({
  plugin: plugin,
  fixtures: path.join(__dirname, "fixtures")
});
