const gulp = require('gulp');
const uglify = require('gulp-uglifycss');

//https://www.npmjs.com/package/gulp-minify
//https://www.youtube.com/watch?v=LYbt50dhTko
const minifyFunction = function (src)
{
  //src e.g. 'Style/style.css'
  return gulp.src(src)
    .pipe(uglifycss
    (
      {
        "maxLineLen":80,
        "uglyComments": false
      }
    ))
      .pipe();
}

gulp.task('minify', minifyFunction);

