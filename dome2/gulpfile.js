/**
 * Created by Administrator on 2017/7/6.
 */
var gulp = require("gulp");
var connect = require("gulp-connect");
//�������ӷ���
gulp.task('connect', function() {
    connect.server({
        root: 'lianxi',
        port:8080,
        livereload: true
    });
});

//��������ҳ��·�����Զ�ˢ��
gulp.task('html', function () {
    gulp.src('lianxi/*.html')
        .pipe(connect.reload());
});

//������������
gulp.task('watch', function () {
    //����·���������ļ���ʽ
    gulp.watch(['lianxi/*.html'], ['html']);
});
//����Ĭ�Ͻ��̣�ִ�ж������
gulp.task('default', ['connect', 'watch']);
