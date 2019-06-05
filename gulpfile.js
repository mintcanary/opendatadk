const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const svgSprite = require('gulp-svg-sprite');
const concat = require('gulp-concat');

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


// js
gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./js'));
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

gulp.task('watch:js', function() {
  return gulp.watch(['./src/js/**/*.js'],
  gulp.series('js'));
});

gulp.task('watch', gulp.parallel('watch:css', 'watch:icons', 'watch:js'));

// deafult task
gulp.task('default', gulp.parallel('watch'));

// build task
gulp.task('build', gulp.parallel('css'));
