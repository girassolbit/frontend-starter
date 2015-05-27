(function(){
  'use strict';

  module.exports = function (JS_FOLDER, gulp, jshint, plumber, onError, reload, notify) {
    gulp.task('jshint', function(){
      gulp.src(JS_FOLDER + '**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp',
           subtitle: 'success',
           message: 'JSHint done! JS Checked',
           sound: "Pop"
         }));
    })
  };

}());
