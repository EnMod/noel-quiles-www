var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    lost = require('lost');

var paths = {


  // My workaround for PostCSS (and Lost) to work locally is to handle PostCSS processing in a 'dev' folder, outputting to production.

  cssSource: 'public/css/_dev/',
  cssDestination: 'public/css/'
};

gulp.task('styles', function() {
  return gulp.src(paths.cssSource + '**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      lost()
    ]))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssDestination));
});

//gulp.watch(paths.cssSource + '**/*.css', ['styles']);

gulp.task('default', ['styles']);
