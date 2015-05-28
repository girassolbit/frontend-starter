var
    gulp         = require('gulp')
    ,stylus      = require('gulp-stylus')
    ,csslint     = require('gulp-csslint')
    ,jshint      = require('gulp-jshint')
    ,jslint      = require('gulp-jslint')
    ,jscs        = require('gulp-jscs')
    ,eslint      = require('gulp-eslint')
    ,uglify      = require('gulp-uglify')
    ,notify      = require('gulp-notify')
    ,traceur     = require('gulp-traceur')
    ,minify_html = require('gulp-minify-html')
    ,minify_css  = require('gulp-minify-css')
    ,prefixer    = require('gulp-autoprefixer')
    ,plumber     = require('gulp-plumber')
    ,browserSync = require('browser-sync')
    ,reload      = browserSync.reload
    // ,imagemin    = require('gulp-imagemin')
    // ,concat      = require('gulp-concat')
    ;

var JS_FOLDER = './template/public/js/'
    ,CSS_FOLDER = './template/public/css/'
    ,IMGS_FOLDER = './template/public/img/'
    ,HTML_FOLDER = './template/'
    ,JS_COMPILED = JS_FOLDER + 'compiled/'
    ,CSS_COMPILED = CSS_FOLDER + 'compiled/'
    ;

// Error pattern common
var onError = function(err) {
                notify.onError({
                            title:    "Gulp"
                            ,subtitle: "Failure!"
                            ,message:  "Error: <%= error.message %>"
                            ,sound:    "Beep"
                        })(err);

                this.emit('end');
              };
//Import
require('./gulp/stylus.js')(CSS_FOLDER, CSS_COMPILED, gulp, stylus, autoprefixer, plumber, onError, reload, notify);
require('./gulp/csslint.js')(CSS_COMPILED, gulp, csslint, plumber, onError, reload, notify);
require('./gulp/jshint.js')(JS_FOLDER, gulp, jshint, plumber, onError, reload, notify);
require('./gulp/jscs.js')(JS_FOLDER, gulp, jscs, plumber, onError, reload, notify);
require('./gulp/jslint.js')(JS_FOLDER, gulp, jslint, plumber, onError, reload, notify);
require('./gulp/eslint.js')(JS_FOLDER, gulp, eslint, plumber, onError, reload, notify);
require('./gulp/uglify.js')(JS_FOLDER, gulp, uglify, plumber, onError, reload, notify);
require('./gulp/traceur.js')(JS_FOLDER, JS_COMPILED, gulp, traceur, plumber, onError, reload, notify);
require('./gulp/minify_html.js')(HTML_FOLDER, gulp, minify_html, plumber, onError, reload, notify);
require('./gulp/minify_css.js')(CSS_COMPILED, gulp, minify_css, plumber, onError, reload, notify);
require('./gulp/browsersync.js')(gulp, browserSync, notify);

//Tasks
gulp.task('stylus', ['stylus', 'lint', 'browsersync']);
gulp.task('lint', ['jshint', 'jscs', 'jslint', 'eslint', 'csslint']);
gulp.task('minify', ['minify_html', 'minify_css']);
gulp.task('default', ['stylus', 'lint', 'uglify', 'traceur', 'minify', 'browsersync']);
