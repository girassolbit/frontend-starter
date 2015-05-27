(function(){
  'use strict';

  module.exports = function (CSS_COMPILED, gulp, csslint, plumber, onError, reload, notify) {
    gulp.task('csslint', function(){
      gulp.src(CSS_COMPILED + '**/*.css')
        .pipe(plumber({errorHandler: onError}))
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter())
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp',
           subtitle: 'success',
           message: 'CSSlint done! CSS Checked',
           sound: "Pop"
         }));
    })
  };

}());
