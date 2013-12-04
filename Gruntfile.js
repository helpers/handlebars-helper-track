/*
 * handlebars-helper-track
 * https://github.com/helpers/handlebars-helper-track
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {jshintrc: '.jshintrc'},
      helper: ['*.js']
    },

    /**
     * Pull down a list of repos from Github.
     * (bundled with the readme task)
     */
    repos: {
      assemble: {
        options: {
          username: 'helpers',
          include: ['handlebars-helper'],
          exclude: ['track']
        },
        files: {
          'docs/helpers.json': ['repos?page=1&per_page=100']
        }
      }
    },

    /**
     * Build the README. Use metadata from
     * repos.json for "Related projects"
     */
    readme: {
      options: {
        metadata: ['docs/helpers.json']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-readme');
  grunt.loadNpmTasks('grunt-repos');


  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'readme']);
};
