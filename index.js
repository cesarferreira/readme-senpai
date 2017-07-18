const marked = require('marked');
const TerminalRenderer = require('marked-terminal');
const githubReadmeGetter = require('github-readme-getter');
const chalk = require('chalk');

// Main code //
module.exports = {
	download: (username, repo) => {
		githubReadmeGetter(username, repo, (error, body) => {
			if (error) {
				console.log(chalk.red('Something went wrong'));
			} else {
				marked.setOptions({
					renderer: new TerminalRenderer()
				});
				console.log(marked(body));
			}
		});
	}
};
