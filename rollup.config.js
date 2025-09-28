const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { default: typescript } = require("@rollup/plugin-typescript");
const { default: dotenv } = require("rollup-plugin-dotenv");

const extensions = [".ts", ".js"];

const preventThreeShakingPlugin = () => {
  return {
    name: "no-threeshaking",
    resolveId(id, importer) {
      // let's not theeshake entry points, as we're not exporting anything in App Scripts
      if (!importer) {
        return { id, moduleSideEffects: "no-treeshake" };
      }
    },
  };
};

module.exports = {
  input: "src/index.ts",
  output: [
    {
      dir: "build",
      format: "cjs",
    },
  ],
  plugins: [
    typescript({ tsconfig: "./tsconfig.build.json" }),
    preventThreeShakingPlugin(),
    nodeResolve({
      extensions,
      mainFields: ["jsnext:main", "main"],
    }),
    babel({
      extensions,
      babelHelpers: "runtime",
      comments: false,
    }),
    dotenv(),
  ],
};
