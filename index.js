const { transform } = require("@babel/core");

module.exports = (babel, options) => {
  console.log(babel);
  console.log(options);
  return {
    name: "esm-url-resolver",
    visitor: {
      ImportDeclaration(path, state) {
        console.log(path.node.source);
      }
    }
  };
};
