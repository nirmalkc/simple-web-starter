const gulp = require('gulp');
const sass = require('gulp-sass'); 
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps'); 
const rename = require('gulp-rename'); 
const browserSync = require('browser-sync').create();
const browserReload = browserSync.reload;


// Task to compile scss to CSS and copy to the dist folder
function scssTask(){    
    return gulp.src('src/scss/main.scss')       
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

// Task to copy the JS files to the dist folder as it is
function jsTask(){    
    return gulp.src('src/js/*.js')       
        .pipe(gulp.dest('dist/js/')); 
}

// Task to copy the Intial Bootstrap JS files and its dependancy to the dist folder
function bootstrapTask(){    
    return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')       
        .pipe(gulp.dest('src/js/')); 
}

// Look for the changes
// function watch(){
    
//     browserSync.init({
//         server: {
//             baseDir: './dist/'
//         }
//     });
//     gulp.watch( 'src/scss/', scssTask);
//     gulp.watch( 'src/*.html', htmlTask);
//     gulp.watch('src/js/*.js', jsTask);
//     gulp.watch('src/*.html').on('change', browserReload);
// }

// exports.watch = watch;


// gulp.task("default", watch);
gulp.task('default', gulp.series(scssTask, htmlTask, jsTask, function() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    gulp.watch( 'src/scss/', scssTask);
    gulp.watch( 'src/*.html', htmlTask);
    gulp.watch('src/js/*.js', jsTask);
    gulp.watch('src/*.html').on('change', browserReload);
}));




