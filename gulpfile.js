/*jslint node: true */
'use strict';

var gulp = require("gulp"),
    jslint = require("gulp-jslint-simple"),
    taskFromStreams = require("gulp-taskfromstreams"),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    projectFiles = "*.js*",
    tests = "test.js";

gulp.task("lint", taskFromStreams(function () {
    return [
        gulp.src([projectFiles, tests]),
        jshint(),
        jslint.run(),
        jslint.report({ emitErrorAtEnd: true })
    ];
}));
