(function(){
  'use strict';

  var nib = require('nib');

  module.exports = function (CSS_FOLDER, CSS_COMPILED, gulp, stylus) {
    gulp.task('stylus', function(){
      gulp.src(CSS_FOLDER + "*.styl")
        .pipe(stylus({ use: [nib()] }))
        .pipe(gulp.dest(CSS_COMPILED))
    });
  };

}());
