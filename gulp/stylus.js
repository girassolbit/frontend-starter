(function(){
  'use strict';

  var
      nib       = require('nib')
      ,jeet     = require('jeet')
      ,rupture  = require('rupture')
      ,kouto_swiss = require('kouto-swiss')
      ,autoprefixer = require('autoprefixer-stylus')
      ,axis = require('axis')
      ;

  module.exports = function (CSS_FOLDER, CSS_COMPILED, gulp, stylus, plumber, reload) {
    gulp.task('stylus', function(){
      gulp.src(CSS_FOLDER + '**/*.styl')
        .pipe(plumber({
          handleError: function (error) {
              console.log(error);
              this.emit('end');
          }
        }))
        .pipe(stylus({
           errors: true
          ,linenos: true
          ,compress: true
          use: [
            jeet()
            ,nib()
            ,rupture()
            ,autoprefixer({ browsers: ['last 2 versions', 'ie >= 8'] })
            ,axis()
            ,koutoSwiss()
          ]
          ,import: ['nib', 'jeet', 'rupture', 'kouto-swiss']
        }))
        .pipe(gulp.dest(CSS_COMPILED))
        .pipe(reload({stream:true}));
    });
  };

}());
