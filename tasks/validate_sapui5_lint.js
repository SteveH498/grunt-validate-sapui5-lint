/*
 * grunt-validate-sapui5-lint
 * hhttps://github.com/SteveH498/grunt-validate-sapui5-lint.git
 *
 * Copyright (c) 2018 Stefan Haas
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  function containsESLintErrors(lintIssues) {
    try {
      // Loop through each file...
      Object.keys(lintIssues).forEach(function (file) {
        //...and check whether it contains errors
        var containsError = lintIssues[file].some(function (issue) {
          return issue.severity === "error";
        });
        if (containsError) {
          throw new Error("ESLint error found!");
        }
      });
      return false; // No errors found
    } catch (e) {
      return true; // Errors found
    }
  }

  grunt.registerMultiTask('validate_sapui5_lint', 'Grunt task to validate the di.code-validation.core_issues.json file created by the "lint" task of the grunt-sapui5-bestpractice-build npm plugin.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      failOnJSErrors: true,
      failOnJSONErrors: true,
      failOnXMLErrors: true,
      writeResultToFile: false
    });

    grunt.log.writeln(JSON.stringify(this,null,1));
    grunt.log.writeln(JSON.stringify(options,null,1));

    // Ensure that JSON file to validate exists
    if (!grunt.file.exists(this.filesSrc[0])) {
      grunt.fail.fatal("Src file (" + this.filesSrc[0] + ") does not exist.");
      return;
    }

    let errorsFoundJS = false;
    let errorsFoundXML = false;
    let errorsFoundJSON = false;

    let lintIssues = grunt.file.readJSON(this.filesSrc[0]);
    // Print out all lint issues regardless of their severity
    grunt.log.writeln(JSON.stringify(lintIssues, null, 1));

    let lintIssuesJS = lintIssues.results["@sap/di.code-validation.js"].issues;
    let lintIssuesXML = lintIssues.results["@sap/di.code-validation.xml"].issues;
    let lintIssuesJSON = lintIssues.results["@sap/di.code-validation.json"].issues;

    errorsFoundJS = containsESLintErrors(lintIssuesJS);
    errorsFoundXML = containsESLintErrors(lintIssuesXML);
    errorsFoundJSON = containsESLintErrors(lintIssuesJSON);

    if(options.failOnJSErrors && errorsFoundJS){
      grunt.fail.warn("ESLint JS Error(s) are present. Please fix them!", 3);
      if(options.writeResultToFile){
        grunt.file.write(this.data.dest, "FAIL");
      }
      return;
    }

    if(options.failOnJSONErrors && errorsFoundXML){
      grunt.fail.warn("JSON Error(s) are present. Please fix them!", 3);
      if(options.writeResultToFile){
        grunt.file.write(this.data.dest, "FAIL");
      }
      return;
    }

    if(options.failOnXMLErrors && errorsFoundJSON){
      grunt.fail.warn("XML Error(s) are present. Please fix them!", 3);
      if(options.writeResultToFile){
        grunt.file.write(this.data.dest, "FAIL");
      }
      return;
    }

    // No lint errors found
    if(options.writeResultToFile){
      grunt.file.write(this.data.dest, "OK");
    }
    grunt.log.writeln("No UI5 lint errors found in file: " + this.filesSrc[0]);
  });


};
