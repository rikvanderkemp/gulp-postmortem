NO LONGER MAINTAINED TO BE EXPIRED SOON
=========

Due to me not using Gulp anymore and so not maintaining this package anymore I am going to put this repo to sleep.
If you need this package please fork!

Expected removal of package: 31st of August 2018

gulp-postmortem
=========

Execute Gulp tasks when exiting a gulp task (useful for watchers).

#Installation

```
npm install gulp-postmortem
```

#Basic Usage

```javascript
var gulp = require('gulp'),
	postMortem = require('gulp-postmortem');


gulp.task('stop-server', function () {
	// Do something amazing
});

gulp.task('sass', function () {
	gulp.src('./scss/*.scss')
	    .pipe(postMortem({gulp: gulp, tasks: ['stop-server']}))
		.pipe(sass())
		.pipe(watch('web/static/sass/**/*.scss', {verbose: true}))
		.pipe(gulp.dest('./css'));
});
```


#Shout out

To [node-monitorctrlc](https://github.com/pandell/node-monitorctrlc) for the basic idea of catching SIGINT.
