var gulp = require('gulp');
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task('minify', function() {
  return gulp.src('jquery.tableCheckbox.js')
    .pipe(uglify())
    .pipe(rename('jquery.tableCheckbox.min.js'))
    .pipe(gulp.dest(''));
});
