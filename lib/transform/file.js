const pathUtil = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(pathUtil.basename(filename))};`;
  }
};
