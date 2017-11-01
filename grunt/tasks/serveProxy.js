module.exports = function (grunt) {
	grunt.registerTask('serveProxy', [
		'less:main',
		'configureRewriteRules:dev',
		'setupProxies:proxy',
		'connect:dev',
        'watch'
	]);
};
