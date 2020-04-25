
const gulp = require('gulp');
const sass = require('gulp-sass'); 
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps'); 
const rename = require('gulp-rename'); 
const browserSync = require('browser-sync').create();
const browserReload = browserSync.reload;


// Task to compile scss to CSS and copy to the dist folder
function scssTask(){    
    return gulp.src('src/scss/style.scss')       
        .pipe(sourcemaps.init())
        .pipe(sass({ 
            errLogToConsole: true
        }))
        .on ( 'error', console.error.bind( console ))
        .pipe(autoprefixer())
        .pipe(rename( { suffix: '.min' } ))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
}

// Task to copy the HTML file to the dist folder as it is
function htmlTask(){    
    return gulp.src('src/*.html')       
        .pipe(gulp.dest('dist/')); 
}

// Look for the changes
function watch(){
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    gulp.watch( 'src/scss/', scssTask);
    gulp.watch( 'src/*.html', htmlTask);
    gulp.watch('src/*.html').on('change', browserReload);
}

exports.watch = watch;

gulp.task("default", watch);