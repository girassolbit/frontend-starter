var
    gulp         = require('gulp')
    ,stylus      = require('gulp-stylus')
    ,csslint     = require('gulp-csslint')
    ,jshint      = require('gulp-jshint')
    // ,jslint      = require('gulp-jslint')
    // ,uglify      = require('gulp-uglify')
    ,notify      = require('gulp-notify')
    // ,traceur     = require('gulp-traceur')
    // ,minify_html = require('gulp-minify-html')
    // ,minify_css  = require('gulp-minify-css')
    // ,imagemin    = require('gulp-imagemin')
    // ,concat      = require('gulp-concat')
    ,prefixer    = require('gulp-autoprefixer')
    ,plumber     = require('gulp-plumber')
    ,browserSync = require('browser-sync')
    ,gulp-util   = require('gulp-util')
    ,reload      = browserSync.reload
    ;

var JS_FOLDER = './public/js/'
    ,CSS_FOLDER = './public/css/'
    ,JS_COMPILED = JS_FOLDER + 'compiled/'
    ,CSS_COMPILED = CSS_FOLDER + 'compiled/'
    ;

var onError = function(err) {
                notify.onError({
                            title:    "Gulp",
                            subtitle: "Failure!",
                            message:  "Error: <%= error.message %>",
                            sound:    "Beep"
                        })(err);

                this.emit('end');
              };

require('./gulp/stylus.js')(CSS_FOLDER, CSS_COMPILED, gulp, stylus, autoprefixer, plumber, onError, reload, notify);
require('./gulp/csslint.js')(CSS_COMPILED, gulp, csslint, plumber, onError, reload, notify);
require('./gulp/jshint.js')(JS_FOLDER, gulp, jshint, plumber, onError, reload, notify);
require('./gulp/jscs.js')(JS_FOLDER, gulp, jscs, plumber, onError, reload, notify);
require('./gulp/jslint.js')(JS_FOLDER, gulp, jslint, plumber, onError, reload, notify);
require('./gulp/eslint.js')(JS_FOLDER, gulp, eslint, plumber, onError, reload, notify);

gulp.task('lint', ['jshint', 'jscs', 'jslint', 'eslint', 'csslint']);

gulp.task('default',
  [
    'stylus'
    ,'lint'
]);
