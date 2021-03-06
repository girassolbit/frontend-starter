(function(){
  'use strict';

  module.exports = function (JS_FOLDER, gulp, jshint, plumber, onError, reload, notify) {
    gulp.task('jshint', function(){
      gulp.src(JS_FOLDER + '**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail')))
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp'
           ,subtitle: 'success'
           ,message: 'JSHint done! JS Checked'
           ,sound: "Pop"
         }));
    })
  };

}());
