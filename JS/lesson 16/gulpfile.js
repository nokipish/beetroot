var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
 

// taskhtml
gulp.task('html', function(){
  return gulp.src('./src/index.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./build'));

});

// tasksass
gulp.task('css', function () {
  return gulp.src('./src/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});


/*Task for JS*/
gulp.task('js', () => {
  gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './node_modules/slick-carousel/slick/slick.js',
    './src/js/main.js'
  ])
    .pipe(concat('main.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      compress: true,
      noSource: true,
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({ stream: true }));
});

gulp.task('img', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
);

gulp.task('build', ['html', 'css', 'js', 'img']);


/* Task Watch */
gulp.task('watch', () => {
  watch('./src/*.html', () => gulp.run('html'));
  watch('./src/css/**/*.scss', () => gulp.run('css'));
  watch('./src/js/**/*.js', () => gulp.run('js'));
  watch('./src/img/**/*.png', () => gulp.run('img'));
});


gulp.task('default', ['build', 'watch']);