const gulp = require('gulp');
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine');
const babel = require('gulp-babel');
const del = require('del');
const reporters = require('jasmine-reporters');

gulp.task('lint', function () {
    return gulp.src(['./lib/*.js','./spec/*.js'])
        .pipe(eslint())
		.pipe(eslint.format())
        .pipe(eslint.failOnError());
});
 
gulp.task('jasmine', function() {
    return gulp.src('spec/*Spec.js')
        .pipe(jasmine({reporter: new reporters.JUnitXmlReporter()}));
});

gulp.task('clean:bin', function (cb) {
	del(['./bin/**'],cb);
});

gulp.task('build', ['clean:bin', 'jasmine', 'lint'], function () {
    return gulp.src('./lib/*.js')
        .pipe(babel())
        .pipe(gulp.dest("./bin"));
});


gulp.task('default', ['build']);