const gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserify = require('browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    runSequence = require('run-sequence');

const app = {
    src: 'app/',
    root: 'root/',
    dist: 'root/dist/'
};

gulp.task('copy:libs', function() {
    return gulp
        .src([
            'node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js',
            'node_modules/material-design-lite/material.min.js',
            'node_modules/moment/min/moment-with-locales.min.js',
            'node_modules/jquery/dist/jquery.min.js'
        ])
        .pipe($.concat('libs.js'))
        .pipe(gulp.dest(app.dist + 'js/'));
});

gulp.task('js', function () {
    browserify(app.src + '/main.js', { debug: true })
        .add(require.resolve('babel-polyfill'))
        .transform(babelify)
        .bundle()
        .on('error', $.util.log.bind($.util, 'Browserify Error'))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest(app.dist + 'js/'));
});

gulp.task('html', function() {
    gulp.src(app.src + '/index.html')
        .pipe(gulp.dest(app.dist));
});

gulp.task('sass', function () {
    var postcss = require('gulp-postcss'),
        autoprefixer = require('autoprefixer');

    return gulp.src([
        'node_modules/material-design-lite/src/material-design-lite.scss',
        app.src + 'sass/main.scss'
    ])
        .pipe($.concat('style.scss'))
        .pipe($.sass({
            outputStyle: 'compressed',
            includePaths: ['node_modules/material-design-lite/src/']
        }).on('error', $.sass.logError))
        .pipe(postcss([
            autoprefixer({browsers: ['> 1%']})
        ]))
        .pipe(gulp.dest(app.dist + 'css'));
});

gulp.task('watch', function() {
    gulp.watch([app.src + '/index.html'], ['html', $.express.notify]);
    gulp.watch([app.src + '/**/*.scss'], ['sass', $.express.notify]);
    gulp.watch([app.src + '/**/*.js'], ['js', $.express.notify]);
});

gulp.task('server', function() {
    $.nodemon({
        script: app.root + 'index.js',
        ext: 'js html',
        ignore: [app.root + '/dist/*'],
        watch: [
            app.root + '/*',
        ],
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('build', function() {
    runSequence(['copy:libs', 'html', 'js', 'sass']);
});

gulp.task('default', ['build', 'server', 'watch']);