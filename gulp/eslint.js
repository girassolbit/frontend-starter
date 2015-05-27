(function(){
  'use strict';

  module.exports = function (JS_FOLDER, gulp, eslint, plumber, onError, reload, notify) {
    gulp.task('eslint', function(){
      gulp.src(JS_FOLDER + '**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(eslint({
          configFile: '.eslintrc'
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp'
           ,subtitle: 'success'
           ,message: 'ESLint done! JS Checked'
           ,sound: "Pop"
         }));
    })
  };

}());
