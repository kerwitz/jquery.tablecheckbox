var gulp = require('gulp');
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task('minify', function() {
  return gulp.src('jquery.tablecheckbox.js')
    .pipe(uglify())
    .pipe(rename('jquery.tablecheckbox.min.js'))
    .pipe(gulp.dest(''));
});
