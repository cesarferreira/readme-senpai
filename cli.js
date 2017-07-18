const meow = require('meow');
const readme = require('./index.js');

const cli = meow(`
	Usage
	  $ foo <username/repo>

	Examples
	  $ foo cesarferreira/assets
	  🌈 unicorns 🌈
`, {});

if (cli.input.length !== 1) {
	cli.showHelp(2);
} else if (cli.input[0].split('/').length !== 2) {
	cli.showHelp(2);
} else {
	const csv = cli.input[0].split('/');
	readme.download(csv[0], csv[1]);
}
