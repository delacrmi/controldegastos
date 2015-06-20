'use strict';

module.exports = function(grunt) {
  var srcFiles = 'javascripts/development/**/*.js',
    testFiles = 'test/**/*.js';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json');

    jshint: {
      build: {
        src: srcFiles
      }
    },

    uglify: {
      build: {
        src: srcFiles,
        dest: 'javascripts/production/all.min.js',
        options: {
          sourceMap: 'javascripts/production/all.min.js.map'
        }
      }
    },

    jasmine: {
      build: {
        src: srcFiles,
        options: {
          specs: testFiles
        }
      }
    },

    watch: {
      build: {
        files: [srcFiles,testFiles],
        tasks: ['jshint', 'uglify', 'jasmine']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['jshint', 'uglify', 'jasmine']);
};