/* eslint-disable node/no-unpublished-require */
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const extensions = ['.ts', '.js'];

const preventThreeShakingPlugin = () => {
  return {
    name: 'no-threeshaking',
    resolveId(id, importer) {
      if (!importer) {
        // let's not theeshake entry points, as we're not exporting anything in App Scripts
        return { id, moduleSideEffects: 'no-treeshake' };
      }

      return null;
    },
  };
};

module.exports = {
  input: './src/index.ts',
  output: [
    {
      dir: 'build',
      format: 'cjs',
    },
  ],
  plugins: [
    preventThreeShakingPlugin(),
    nodeResolve({
      extensions,
      mainFields: ['jsnext:main', 'main'],
    }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      comments: false,
    }),
  ],
};
