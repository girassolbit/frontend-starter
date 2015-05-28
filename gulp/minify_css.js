(function(){
  'use strict';

  module.exports = function (CSS_COMPILED, gulp, minify_css, plumber, onError, reload, notify) {
    gulp.task('minify_css', function(){
      gulp.src(JS_FOLDER + '**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(minify_css({
           keepSpecialComments: 0
          ,keepBreaks: true
        }))
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp'
           ,subtitle: 'success'
           ,message: 'Minify CSS done!'
           ,sound: "Pop"
         }));
    })
  };

}());
