const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

//declare the scr folder
let root = './src' + '/';
let scssFolder = root + 'scss/';
let allScssFiles = scssFolder + '**/*.scss';

//declare the build folder
let build = './dist/' + '/';
let cssFolder = build + 'css';

// Compile scss into css
function css() {
  return gulp
    .src(scssFolder + '')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssFolder))
    .pipe(browserSync.stream());
}

//minify css
function minCSS() {
  return gulp
    .src(scssFolder + 'main.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssFolder))
    .pipe(browserSync.stream());
}

function watch() {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(allScssFiles, gulp.series(css, minCSS));
  gulp.watch('./*.html').on('change', browserSync.reload);

}

exports.css = css;
exports.minCSS = minCSS;
exports.compileAndMinify = gulp.series(css, minCSS);
exports.watch = watch;
exports.default = gulp.series(css, minCSS);