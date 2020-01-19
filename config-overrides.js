/* config-overrides.js */
const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]'
  })
);
