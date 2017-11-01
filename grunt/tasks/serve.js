module.exports = function (grunt) {
	grunt.registerTask('serve', [
		'less:main',
		'configureRewriteRules:dev',
		'setupProxies:noProxy',
		'connect:dev',
        'watch'
	]);
};
