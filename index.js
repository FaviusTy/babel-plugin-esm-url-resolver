const { extname } = require("path");

function isExcludePath(srcPath, dirs) {
  if (extname(srcPath) !== "") return true;
  if (srcPath[0] === ".") return false;
  if (dirs.findIndex(dir => srcPath.startsWith(`${dir}/`)) !== -1) return false;
  return true;
}

module.exports = ({ types: t }, { dirs = [] } = {}) => {
  return {
    name: "esm-url-resolver",
    visitor: {
      ImportDeclaration(path) {
        const srcPath = path.node.source.value;
        if (isExcludePath(srcPath, dirs)) return;
        path.node.source = t.stringLiteral(`${srcPath}.js`);
      },

      CallExpression(path) {
        if (!t.isImport(path.node.callee)) return;
        const srcPath = path.node.arguments[0].value;
        if (isExcludePath(srcPath, dirs)) return;
        path.node.arguments = [t.stringLiteral(`${srcPath}.js`)];
      }
    }
  };
};
