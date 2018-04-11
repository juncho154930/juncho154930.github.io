var gulp = require('gulp'),
	clean = require('gulp-clean'),
	htmlmin = require('gulp-htmlmin'),
	replace = require('gulp-replace'),
	fs = require('fs'),
	gzip = require('gulp-gzip');


gulp.task('clean', function() {
	return gulp.src('dist', {read:false})
		.pipe( clean() );
});

gulp.task('build', ['clean'], function() {
	return gulp.src("src/index.html")
		.pipe(replace('<strong>', '<b>'))
		.pipe(replace('</strong>', '</b>'))
		.pipe(replace(/<link href="10k.css"[^>]*>/, function(s) {
			var style = fs.readFileSync('src/10k.css', 'utf8');
			return '<style>\n' + style + '\n</style>';
		}))
		.pipe(replace(/<script src="10k.js"[^>]*>/, function(s) {
			var js = fs.readFileSync('src/10k.js', 'utf8');
			return '<script>\n' + js + '\n</script>';
		}))
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true,
			minifyCSS: true,
			minifyJS: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('compress', ['build'], function() {
	return gulp.src('dist/index.html')
		.pipe(gzip())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['compress'], function() {
	return gulp.src('src/index.php')
		.pipe(gulp.dest('dist'));
});
