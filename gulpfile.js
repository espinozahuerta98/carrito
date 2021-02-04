const gulp = require('gulp');
const sass = require('gulp-sass');
const autiprefixer = require('gulp-autoprefixer');
const autoPrefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe(gulp.dest('css'));
}

function watchFiles() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html', css);
}


//Registrar funciones como tarea
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles))