#!/usr/bin/env node

const pathUtil = require('path');
const minimist = require('minimist');
const createJestConfig = require('../lib/createJestConfig');

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';


process.on('unhandledRejection', err => {
  throw err;
});


const argv = process.argv.slice(2);
const args = minimist(argv);
const appRoot = args._[0] ? pathUtil.resolve(args._[0]) : process.cwd();
process.chdir(appRoot);
argv.push('--config', JSON.stringify(createJestConfig(appRoot)));

// jet v24.0 should require lately
require('jest-cli/build/cli');
require('jest').run(argv);
