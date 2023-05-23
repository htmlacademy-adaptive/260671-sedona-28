import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import {deleteAsync} from 'del';
import browser from 'browser-sync';

//Html

export const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('build/'))
}

//Cleaner

const cleaner = () => {
  return deleteAsync('build');
};

// Fonts

const fonts = () => {
  return gulp.src('source/fonts/*.*')
  .pipe(gulp.dest('build/fonts'));
}

// Styles

export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

//Scripts minification
const scripts = () => {
  return gulp.src('source/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('build/js'));
}

//Images optimisation

const images = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'));
}

//SVG optimization

const svg = () => {
  return gulp.src('source/img/**/*.svg')
  .pipe(svgo())
  .pipe(gulp.dest('build/img'));
}

//WEBP convertation

const webp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(squoosh({
    webp:{}
  }))
  .pipe(gulp.dest('build/img'));
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', () => {gulp.series(html)(); browser.reload();});
}

export const build = gulp.series(
  cleaner,
  images,
  svg,
  webp,
  fonts,
  gulp.parallel(
    html,
    scripts,
    styles,
  ),
);

export default gulp.series(
  build, server, watcher
);
