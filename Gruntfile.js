'use strict';

module.exports = function(grunt) {
  var srcFiles = ['./public/javascripts/**/*.js','./app/component/**/*.js'],
    testFiles = 'test/**/*.js';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      options: {
        transform: [require('grunt-react').browserify]
      },
      build:{
        options: {
          standalone: 'app'
        },
        src: './app/components/*.js',
        dest: './public/javascripts/components.js'
      }
    },

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
      },
      dev: {
        files: './app/components/*.js',
        tasks: ['browserify'],
        options: { spawn: false }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);
  grunt.registerTask('build', ['jshint', 'uglify', 'jasmine']);
  grunt.registerTask('dev', ['watch']);
};