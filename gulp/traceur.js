(function(){
  'use strict';

  module.exports = function (JS_FOLDER, JS_COMPILED, gulp, traceur, plumber, onError, reload, notify) {
    gulp.task('traceur', function(){
      gulp.src(JS_FOLDER + '**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(traceur({
           annotations: true
          ,experimental: true
          ,blockBinding: true
          ,sourceMaps: false
        })
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp'
           ,subtitle: 'success'
           ,message: 'Traceur done! JS Compressed'
           ,sound: "Pop"
         }));
    })
  };

}());
