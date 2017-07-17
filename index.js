
// Main code //
module.exports = {
	download: (url) => {
		require('node-read-url')
			.promise('https://raw.githubusercontent.com/${user}/master/README.md')
			.then(response => {
				console.log(response)
			})
			.catch(err => {
				console.log(err)
			});
	}
};
