/**
 * Created by Administrator on 2017/7/6.
 */
var gulp = require("gulp");
var connect = require("gulp-connect");
//创建连接服务
gulp.task('connect', function() {
    connect.server({
        root: 'lianxi',
        port:8080,
        livereload: true
    });
});

//创建监听页面路径及自动刷新
gulp.task('html', function () {
    gulp.src('lianxi/*.html')
        .pipe(connect.reload());
});

//创建监听服务
gulp.task('watch', function () {
    //监听路径及监听文件格式
    gulp.watch(['lianxi/*.html'], ['html']);
});
//创建默认进程，执行多个服务
gulp.task('default', ['connect', 'watch']);
