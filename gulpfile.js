var
    gulp         = require('gulp')
    ,stylus      = require('gulp-stylus')
    ,csslint     = require('gulp-csslint')
    ,jshint      = require('gulp-jshint')
    ,jslint      = require('gulp-jslint')
    ,uglify      = require('gulp-uglify')
    ,notify      = require('gulp-notify')
    // ,livereload  = require('gulp-livereload')
    ,traceur     = require('gulp-traceur')
    ,minify_html = require('gulp-minify-html')
    ,minify_css  = require('gulp-minify-css')
    ,imagemin    = require('gulp-imagemin')
    ,concat      = require('gulp-concat')
    // ,prefixer    = require('gulp-autoprefixer')
    ,plumber     = require('gulp-plumber')
    // ,webserver   = require('gulp-webserver')
    ,browserSync = require('browser-sync')
    ,reload      = browserSync.reload
    ;

var JS_FOLDER = './public/js/'
    ,CSS_FOLDER = './public/css/'
    ,JS_COMPILED = JS_FOLDER + 'compiled/'
    ,CSS_COMPILED = CSS_FOLDER + 'compiled/'
    ;

require('./gulp/stylus.js')(CSS_FOLDER, CSS_COMPILED, gulp, stylus, plumber, reload);

gulp.task('default',
  [
    'stylus'
    ,'csslint'
    ,'jshint'
    ,'watch'
]);
