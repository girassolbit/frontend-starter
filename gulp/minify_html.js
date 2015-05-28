(function(){
  'use strict';

  module.exports = function (HTML_FOLDER, gulp, minify_html, plumber, onError, reload, notify) {
    gulp.task('minify_html', function(){
      gulp.src(HTML_FOLDER + 'index.html')
        .pipe(plumber({errorHandler: onError}))
        .pipe(minify_html({
            conditionals: true
            ,spare: true
            ,comments:true
        }))
        .pipe(reload({stream:true, once: true}))
        .pipe(notify({
           title: 'Gulp'
           ,subtitle: 'success'
           ,message: 'Minify HTML done!'
           ,sound: "Pop"
         }));
    })
  };

}());
