/*
 * grunt-validate-sapui5-lint
 * https://github.com/SteveH498/grunt-validate-sapui5-lint.git
 *
 * Copyright (c) 2018 Stefan Haas
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    validate_sapui5_lint: { // Task
      options: { // Task level defaults
        failOnJSErrors: true,
        failOnJSONErrors: true,
        failOnXMLErrors: true,
        writeResultToFile: true,
      },
      default: { // Target
        src: 'test/fixtures/JS-error.di.code-validation.core_issues.json',
        dest: 'tmp/JS_Error_Fail_validationResult'
      },
      do_not_fail: { // Target
        options: {
          failOnJSErrors: false
        },
        src: 'test/fixtures/JS-error.di.code-validation.core_issues.json',
        dest: 'tmp/JS_Error_validationResult'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'validate_sapui5_lint', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
