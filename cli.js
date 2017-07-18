#!/usr/bin/env node

const meow = require('meow');
const readme = require('./index.js');

const cli = meow(`
	Usage
	  $ foo <username/repo>

	Examples
	  $ foo cesarferreira/assets
	  🌈 unicorns 🌈
`, {});

if (cli.input.length === 1) {
	const csv = cli.input[0].split('/');
	readme.download(csv[0], csv[1]);
} else {
	cli.showHelp(2);
}
