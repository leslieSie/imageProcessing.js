let gulp = require('gulp');
const babel = require('gulp-babel');

// ES6转JS
let es62js = function(dir) {
    gulp.src('../src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(`../${dir}`))
}

// 导出
module.exports = {
    es62js
}