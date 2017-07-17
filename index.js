const marked = require('marked');
const TerminalRenderer = require('marked-terminal');

// Main code //
module.exports = {
	download: (url) => {
		require('node-read-url')
			.promise(`https://raw.githubusercontent.com/${url}/master/README.md`)
			.then(response => {
				// console.log(response)
				marked.setOptions({
					// Define custom renderer
					renderer: new TerminalRenderer()
				});
				console.log(marked(response));
			})
			.catch(err => {
				console.log(err)
			});
	}
};
