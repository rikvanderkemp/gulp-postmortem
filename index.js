/*jslint node: true */
'use strict';

var map = require('map-stream'),
    lodash = require('lodash');

console.log('\x1b[31m', '='.repeat(80))
console.log('\x1b[31m', 'WARNING! gulp-postmortem to be removed soon!')
console.log('\x1b[31m', '='.repeat(80))

module.exports = function (options) {
    function postMortem() {
        var stdin = process.stdin;

        if (stdin && stdin.isTTY) {
            stdin.setRawMode(true);
            stdin.on('data', function catchCtrlC(data) {
                // Catch exit code SIGINT / ctrl-C
                if (data.length === 1 && data[0] === 0x03) {
                    if (undefined !== options.gulp && undefined !== options.tasks) {
                        lodash.forEach(options.tasks, function (taskName) {
                            if (options.gulp.hasTask(taskName)) {
                                options.gulp.start(taskName);
                            }
                        });
                    }
                    process.exit();
                }
            });

        }
    }

    return map(postMortem);
};
