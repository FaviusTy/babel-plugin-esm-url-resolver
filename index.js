const { extname } = require("path");

module.exports = ({ types: t }) => {
  return {
    name: "esm-url-resolver",
    visitor: {
      ImportDeclaration(path, state) {
        const srcPath = path.node.source.value;
        if (srcPath[0] !== "." || extname(srcPath) !== "") return;
        path.node.source = t.stringLiteral(`${srcPath}.js`);
      }
    }
  };
};
