module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: '12'}}],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    // Polyfills the runtime needed for async/await, generators, and friends
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    ['@babel/plugin-transform-runtime'],
  ],
};
