var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    sourcemaps = require('gulp-sourcemaps'),
    cache = require('gulp-cache'),
    prefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .on('error', sass.logError)
        .pipe(prefixer())
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }));
});


gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'))
        .pipe(rowserSync.reload({ stream: true }));
})


gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
    var buildCss = gulp.src([
            'app/css/main.css'
        ])
        .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('clear', function() {
    return cache.clearAll();
})

gulp.task('default', ['watch']);