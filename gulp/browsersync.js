(function(){
  'use strict';

  module.exports = function (gulp, browserSync, notify) {
    gulp.task('minify_html', function(){
      browserSync({
        proxy: 'localhost:3000',
        notify: true,
        logConnections: true,
        port: 3000,
        browser: ['google chrome']
        open: true,
        files: './template/**/*',
        server: {
          baseDir: ['template'],
          index: 'index.html'
        }
      });

      notify({
         title: 'Gulp'
         ,subtitle: 'success'
         ,message: 'BrowserSync running!'
         ,sound: "Pop"
       });
    };

}());
