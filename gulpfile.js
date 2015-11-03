var gulp  = require('gulp');

var gulputil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

gulp.task('scss', function() {
    gulp.src('web/assets/scss/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('web/assets/css'));
});

gulp.task('jshint', function() {
    gulp.src(['web/assets/js/main.js', 'web/assets/js/components/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    gulp.src(['web/assets/js/components/*.js', 'web/assets/js/main.js'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('web/assets/js/'));
});

gulp.task('vendors', function() {
    gulp.src([
        'web/assets/vendors/jquery/dist/jquery.min.js'
    ])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('web/assets/js/'));
});

gulp.task('watch', function() {
  gulp.watch('web/assets/js/**/*.js', ['jshint', 'scripts', 'vendors']);
  gulp.watch('web/assets/scss/**/*.scss', ['scss']);
});

gulp.task('default', function() {
    return gulputil.log('Gulp is runnig');
});
