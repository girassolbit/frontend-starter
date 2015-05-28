(function(){
  'use strict';

  module.exports = function (JS_FOLDER, gulp, uglify, plumber, onError, reload, notify) {
    gulp.task('uglify', function(){
      gulp.src(JS_FOLDER + '**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(uglify(
          // { mangle:true }
        ))
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp'
           ,subtitle: 'success'
           ,message: 'Uglify done! JS Compressed'
           ,sound: "Pop"
         }));
    })
  };

}());
