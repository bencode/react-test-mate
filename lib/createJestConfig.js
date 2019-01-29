const fs = require('fs');
const pathUtil = require('path');


module.exports = function(appRoot) {
  const setupPath = 'src/setupTests.js';
  const setupFiles = fs.existsSync(
    pathUtil.resolve(appRoot, setupPath)
  ) ? `<rootDir>/${setupPath}` : undefined;

  const jestConfig = {
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!**/__tests__/**',
      '!{dist,build,config,public,coverage,node_modules}/**',
      ...getCoverageIgnoreFiles(appRoot)
    ],
    testURL: process.env.TEST_URL || 'http://localhost',
    testMatch: [
      '**/__tests__/*.{js,jsx}',
      '**/?(*.)(spec|test).{js,jsx}',
      '**/__tests__/!(fixtures|supports)/**/*.{js,jsx}'
    ],
    transformIgnorePatterns: [
      '/node_modules/(?!((.+\\.css)/))'
    ],
    setupFiles: [
      pathUtil.resolve(__dirname, './shim.js'),
      pathUtil.resolve(__dirname, './setup.js')
    ],
    setupTestFrameworkScriptFile: setupFiles,
    transform: {
      '^.+\\.(js|jsx|mjs)$': pathUtil.resolve(__dirname, './transform/js.js'),
      '^.+\\.css$': pathUtil.resolve(__dirname, './transform/css.js'),
      '^(?!.*\\.(js|jsx|mjs|css|json)$)': pathUtil.resolve(__dirname, './transform/file.js')
    }
  };

  const appConfigPath = pathUtil.resolve(appRoot, 'jest.config.js');
  return fs.existsSync(appConfigPath) ?
    require(appConfigPath)(jestConfig) :
    jestConfig;
};


function getCoverageIgnoreFiles(appRoot) {
  const rJs = /\.(js|jsx)$/;
  const files = fs.readdirSync(appRoot).filter(name => rJs.test(name));
  return files.filter(name => {
    const ext = pathUtil.extname(name);
    const testFileName = pathUtil.basename(name, ext) + '.test' + ext;
    const testPath = pathUtil.join(appRoot, testFileName);
    return !fs.existsSync(testPath);
  }).map(name => `!${name}`);
}
