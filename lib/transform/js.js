const babelJest = require('babel-jest');


module.exports = babelJest.createTransformer({
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-react')
  ],
  plugins: [
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-syntax-dynamic-import')
  ],
  babelrc: true
});
