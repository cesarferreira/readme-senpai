const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const log = require('node-time-log').SimpleLog;
const Chalk = require('chalk');

// This will notify the user to update the
// package if a new version is released
updateNotifier({pkg}).notify();

// main code //
log(`Hello ${Chalk.green('world')}!`);
