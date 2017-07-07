/**
 * Created by Administrator on 2017/7/6.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('webserver', function() {
    gulp.src('rikao_2')
        .pipe(webserver({
            port:"3000",
            livereload: true,
            directoryListing: {
                path:"rikao_2",
                enable:true
            },
            open: true,
            fallback:"index.html"
        }));
});
