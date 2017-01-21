var gulp=require("gulp");
var concat = require('gulp-concat');
var vendorFiles= ["./bower_components/jquery/jquery.js",
                  "./bower_components/bootstrap/dist/js/bootstrap.js",
                 "./bower_components/angular/angular.js"];

var userFiles=["./app/*/*.js"];
 
gulp.task('bundle', function() {
  return gulp.src(userFiles)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('vendor', function() {
  return gulp.src(vendorFiles)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/'));
});