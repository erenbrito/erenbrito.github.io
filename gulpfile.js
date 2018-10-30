const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

// compile .scss to .css files
gulp.task('sass', function() {
  return gulp.src(['src/sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// minify images
gulp.task('images', function() {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});

// watch sass & serve
gulp.task('serve', ['sass', 'images'], function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch(['src/sass/**/*.scss'], ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

// default task
gulp.task('default', ['serve']);
