'use strict';

module.exports = function (grunt) {

  grunt.config.set('compress', {
    main: {
      options: {
        archive: 'dist/build.zip',
        pretty: true,
        store: true
      },
      files: [{
        expand: true,
        cwd: 'dist',
        src: ['**/*-preload.*', '**/*.css', 'index.html', '**/*.json']
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
};