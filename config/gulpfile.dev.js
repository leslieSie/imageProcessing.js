let gulp = require('gulp');
let connect = require('gulp-connect');
let base = require('./gulpfile.base.js');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');

// function markIndex(dir) {
//     var es = browserify({
//         entries: `../example/index.js`,
//         debug: true
//     });

//     return es.bundle()
//         .pipe(source('index.js'))
//         .pipe(buffer())
//         .pipe(gulp.dest(`../${dir}`))
// }

// 清除
gulp.task('clean', async() => {
    base.clean();
});

// 监听web服务器开启
gulp.task('webserver', async() => {
    connect.server({
        root: '../dist',
        livereload: true,
        port: 8081
    })
});

// html文件处理
function gulpHTMLLoader() {
    gulp.src('../example/**/*.html')
        .pipe(gulp.dest('../dist'));
}

gulp.task('watch_example', async() => {
    // HTML监控

    gulp.watch(['../example/**/*.html']).on('change', function(path) {
        gulpHTMLLoader();
        connect.reload();
        console.log(`路径为${__filename}的HTML文件已经被更改`);
    });

    gulp.watch(['../src/*.js']).on('change', function(path) {
        base.es62js({
            outputDir: 'dist'
        });
        console.log(`路径为${__filename}的JS文件已经被更改`);
    });
});

gulp.task('default', gulp.series('webserver', 'watch_example', function() {
    gulpHTMLLoader();
    base.es62js({
        outputDir: 'dist'
    });
    console.log('监听开启！');
}));