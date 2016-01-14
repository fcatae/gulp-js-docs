var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('concat', function() {
  return gulp.src('./lib/**/*.js')
    .pipe(concat('d.js'))
    .pipe(gulp.dest('./dist/'));
});

function doWork(rule, src, destfile) {
    
    gulp.task(rule, function() {
    return gulp.src(src)
        .pipe(concat(rule + '.txt'))
        .pipe(gulp.dest('./dist/'));
    });
 
}

doWork('js-backend', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/Backend/**/*.*');
doWork('js-common', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/Common/**/*.*');
doWork('js-jsrt', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/jsrt/**/*.*');
doWork('js-parser', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/parser/**/*.*');
doWork('runtime-base', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/runtime/base/**/*.*');
doWork('runtime-byte', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/runtime/ByteCode/**/*.*');
doWork('runtime-debug', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/runtime/debug/**/*.*');
doWork('runtime-lang', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/runtime/language/**/*.*');
doWork('runtime-lib', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/runtime/library/**/*.*');
doWork('runtime-math', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/runtime/math/**/*.*');
doWork('runtime-types', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/runtime/types/**/*.*');
doWork('runtime-root', 'C:/Users/fcatae/Desktop/ChakraCore-master/lib/runtime/*.*');

gulp.task('all', ['js-backend','js-common','js-jsrt', 'js-parser','runtime-base',
    'runtime-byte','runtime-debug', 'runtime-lang', 'runtime-lib', 'runtime-math', 
    'runtime-types','runtime-root'] );