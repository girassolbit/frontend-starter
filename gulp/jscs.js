(function(){
  'use strict';

  module.exports = function (JS_FOLDER, gulp, jscs, plumber, onError, reload, notify) {
    gulp.task('jscs', function(){
      gulp.src(JS_FOLDER + '**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(jscs({
	            configPath: '.jscsrc'
	            ,fix: true
	           }))
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp'
           ,subtitle: 'success'
           ,message: 'JSCS done! JS Checked'
           ,sound: "Pop"
         }));
    })
  };

}());
