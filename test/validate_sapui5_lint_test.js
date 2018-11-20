'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.validate_sapui5_lint = {

  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/JS_Error_Fail_validationResult');
    var expected = grunt.file.read('test/expected/JS_Error_Fail_validationResult');
    test.equal(actual, expected, 'Fail on lint errors.');

    test.done();
  },
  do_not_fail: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/JS_Error_validationResult');
    var expected = grunt.file.read('test/expected/JS_Error_validationResult');
    test.equal(actual, expected, 'Do not fail on lint errors.');

    test.done();
  }
};
