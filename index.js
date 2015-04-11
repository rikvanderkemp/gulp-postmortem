/*jslint node: true */
'use strict';

var map = require('map-stream'),
    lodash = require('lodash');

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
