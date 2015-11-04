var gulp  = require('gulp');

var gulputil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

gulp.task('scss', function() {
    gulp.src('src/scss/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/assets/css'));
});

gulp.task('jshint', function() {
    gulp.src(['src/js/main.js', 'src/js/components/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    gulp.src(['src/js/components/*.js', 'src/js/main.js'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/assets/js/'));
});

gulp.task('vendors', function() {
    gulp.src([
        'bower_components/jquery/dist/jquery.min.js'
    ])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('app/assets/js/'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['jshint', 'scripts', 'vendors']);
  gulp.watch('src/scss/**/*.scss', ['scss']);
});

gulp.task('default', function() {
    return gulputil.log('Gulp is runnig');
});
