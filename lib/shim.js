global.regeneratorRuntime = require('regenerator-runtime');

global.requestAnimationFrame = cb => setImmediate(cb);
global.cancelAnimationFrame = v => clearImmediate(v);
