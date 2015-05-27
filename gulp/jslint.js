(function(){
  'use strict';

  module.exports = function (JS_FOLDER, gulp, jslint, plumber, onError, reload, notify) {
    gulp.task('jslint', function(){
      gulp.src(JS_FOLDER + '**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(jslint({
           node: true
          ,sloppy: true
          ,stupid: true
          ,vars: true
          ,unparam: true
          ,nomen: true
          ,white: true
          ,errorsOnly: false
          ,plusplus: true
          ,bitwise: true
          ,todo: true
          ,browser: true
          ,devel: true
          ,evil: true
          ,shebang: true
          // ,global: [ 'angular' ]
        }))
        .pipe(jslint.reporter('default'))
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp'
           ,subtitle: 'success'
           ,message: 'JSLint done! JS Checked'
           ,sound: "Pop"
         }));
    })
  };

}());
