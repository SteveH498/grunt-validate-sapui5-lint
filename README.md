# grunt-validate-sapui5-lint

> Grunt task to validate the di.code-validation.core_issues.json file created by the "lint" task of the grunt-sapui5-bestpractice-build npm plugin.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-validate-sapui5-lint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-validate-sapui5-lint');
```

## The "validate_sapui5_lint" task

### Overview
In your project's Gruntfile, add a section named `validate_sapui5_lint` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  validate_sapui5_lint: {
    options: {
      // Task-specific options go here.
      failOnJSErrors: true,
      failOnJSONErrors: true,
      failOnXMLErrors: true,
      writeResultToFile: true
    },
    your_target: {
      // Target-specific file lists and/or options go here.
      options: {
        failOnJSErrors: false,
        writeResultToFile: false
      },
      src: 'dist/di.code-validation.core_issues.json'
    },
  },
});
```
<!--

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  validate_sapui5_lint: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  validate_sapui5_lint: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
-->
