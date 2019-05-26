let gulp = require('gulp');
let base = require('./gulpfile.base.js');
let rename = require('gulp-rename');
const uglify = require('gulp-uglify');
let babel = require('gulp-babel');


function renameAndMinFile() {
    gulp.src('../src/**/*.js')
        .pipe(rename(function(path) {
            path.basename = `${path.basename}.min`;
        }))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify({
            compress: true
        }))
        .pipe(gulp.dest('../build'))
}

gulp.task('default', async() => {
    renameAndMinFile();
    base.es62js('build');
});