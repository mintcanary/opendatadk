const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const svgSprite = require('gulp-svg-sprite');

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


// icons
gulp.task('icons', function(done) {
  gulp.src('**/*.svg', { cwd: './src/icons' })
    .pipe(svgSprite(
      config = {
        mode: {
          symbol: true
        }
      }
    ))
    .pipe(gulp.dest('./_includes'));
    done();
});


// watching
gulp.task('watch:css', function() {
  return gulp.watch(['./src/css/**/*.css'],
  gulp.series('css'));
});

gulp.task('watch:icons', function() {
  return gulp.watch(['./src/icons/**/*.svg'],
  gulp.series('icons'));
});

gulp.task('watch', gulp.parallel('watch:css', 'watch:icons'));

// deafult task
gulp.task('default', gulp.parallel('watch'));

// build task
gulp.task('build', gulp.parallel('css'));
