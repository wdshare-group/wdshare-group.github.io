var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var scssPath = './themes/maupassant/source/css/*.scss';

// 一次性编译 Sass 
gulp.task('sass', function() {
    return gulp.src(scssPath)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./themes/maupassant/source/css'));
});

// 实时编译
gulp.task('default', ['sass'], function() {
    gulp.watch(scssPath, ['sass']);
});