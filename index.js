const { extname } = require("path");

function isLocalModulePath(srcPath) {
  return srcPath[0] === "." && extname(srcPath) === "";
}

module.exports = ({ types: t }) => {
  return {
    name: "esm-url-resolver",
    visitor: {
      ImportDeclaration(path) {
        const srcPath = path.node.source.value;
        if (!isLocalModulePath(srcPath)) return;
        path.node.source = t.stringLiteral(`${srcPath}.js`);
      },

      CallExpression(path) {
        if (!t.isImport(path.node.callee)) return;
        const srcPath = path.node.arguments[0].value;
        console.log(srcPath);
        if (!isLocalModulePath(srcPath)) return;
        path.node.arguments = [t.stringLiteral(`${srcPath}.js`)];
      }
    }
  };
};
