const fs = require('fs');
const pathUtil = require('path');


module.exports = function(appRoot) {
  const setupPath = 'src/setupTests.js';
  const setupFiles = fs.existsSync(pathUtil.resolve(appRoot, setupPath))
    ? `<rootDir>/${setupPath}`
    : undefined;

  const jestConfig = {
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!(node_modules|coverage|examples|plato|__tests__)/**',
      '!webpack.config.js',
      '!jest.config.js'
    ],
    testURL: 'http://localhost',
    testMatch: [
      '<rootDir>/**/__tests__/(!(fixtures|supports))/**/*.{js,jsx}',
      '<rootDir>/**/?(*.)(spec|test).{js,jsx}'
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

