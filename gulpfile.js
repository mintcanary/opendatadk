const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');

// CSS
gulp.task('css', function () {
  return gulp.src('./src/css/styles.css')
    .pipe(postcss([
        require('postcss-import'),
        postcssPresetEnv({
          features: {
            'nesting-rules': true
          }
        }),
        require('tailwindcss'),
      ]))
    .pipe(gulp.dest('./css'));
});

// watching
gulp.task('watch:css', function() {
  return gulp.watch(['./src/css/**/*.css'],
  gulp.series('css'));
});

gulp.task('watch', gulp.parallel('watch:css'));

// deafult task
gulp.task('default', gulp.parallel('watch'));

// build task
gulp.task('build', gulp.parallel('css'));
