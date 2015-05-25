/*
"gulp": "gulp-jshint": "gulp-csslint": "gulp-jslint":
"gulp-stylus": "gulp-uglify": "gulp-notify":
"gulp-livereload": "gulp-traceur": "gulp-minify-html":
"gulp-minify-css": "gulp-imagemin": "gulp-concat":
*/

var gulp        = require('gulp'),
    stylus      = require('gulp-stylus'),
    csslint     = require('gulp-csslint'),
    jshint      = require('gulp-jshint'),
    jslint      = require('gulp-jslint'),
    uglify      = require('gulp-uglify'),
    notify      = require('gulp-notify'),
    livereload  = require('gulp-livereload'),
    traceur     = require('gulp-traceur'),
    minify-html = require('gulp-minify-html'),
    minify-css  = require('gulp-minify-css'),
    imagemin    = require('gulp-imagemin'),
    concat      = require('gulp-concat'),
    // prefixer  = require('gulp-autoprefixer'),
    ;

var JS_FOLDER = './public/js/',
    CSS_FOLDER = './public/css/',
    CSS_COMPILED = CSS_FOLDER + 'compiled/';

require('./gulp/stylus.js')(CSS_FOLDER, CSS_COMPILED, gulp, stylus);

gulp.task('default', function() {
  gulp.start('stylus');
	// gulp.start('jshint');
	// gulp.start('csslint');
});
