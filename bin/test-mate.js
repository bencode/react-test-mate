#!/usr/bin/env node


const fs = require('fs');
const jest = require('jest');
const createJestConfig = require('../lib/createJestConfig');


process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';


process.on('unhandledRejection', err => {
  throw err;
});


const appRoot = fs.realpathSync(process.cwd());

const argv = process.argv.slice(2);
// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

argv.push('--config', JSON.stringify(createJestConfig(appRoot)));

jest.run(argv);
