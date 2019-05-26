let gulp = require('gulp');
const babel = require('gulp-babel');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let browserify = require('browserify');


// ES6转JS
let es62js = function(options) {
    let outputDir = options.outputDir;
    let name = options.name || 'index';
    // 构建browserify实例
    var es = browserify({
        entries: `../src/${name}.js`,
        debug: true
    });

    return es.bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest(`../${outputDir}`))
}

// 导出
module.exports = {
    es62js
}