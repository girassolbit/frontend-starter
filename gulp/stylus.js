(function(){
  'use strict';

  var
      nib           = require('nib')
      ,jeet         = require('jeet')
      ,rupture      = require('rupture')
      ,kouto_swiss  = require('kouto-swiss')
      ,autoprefixer = require('autoprefixer-stylus')
      ,axis         = require('axis')
      ,lost         = require('lost')
      ,typographic  = require('typographic')
      ;

  module.exports = function (CSS_FOLDER, CSS_COMPILED, gulp, stylus, autoprefixer, plumber, onError, reload, notify) {
    gulp.task('stylus', function(){
      gulp.src(CSS_FOLDER + '**/*.styl')
        .pipe(plumber({errorHandler: onError}))
        .pipe(stylus({
           errors: true
          ,linenos: true
          ,compress: true
          ,'include css': true
          use: [
            jeet()
            ,nib()
            ,rupture()
            ,axis()
            ,koutoSwiss()
            ,lost()
            ,typographic()
          ]
          ,import: ['nib', 'jeet', 'rupture', 'kouto-swiss', 'typographic']
        }))
        .pipe(autoprefixer('last 2 versions', 'ie >= 8'))
        .pipe(gulp.dest(CSS_COMPILED))
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({ // Add gulpif here
           title: 'Gulp',
           subtitle: 'success',
           message: 'Stylus compiled, css done!',
           sound: "Pop"
         }));
    });
  };

}());
