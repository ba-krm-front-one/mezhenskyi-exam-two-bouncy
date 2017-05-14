const gulp = require('gulp'); // Подключение гульпа
const postcss = require('gulp-postcss'); // Подключение PostCSS
const sourcemaps = require('gulp-sourcemaps');// Подключение Sourcemaps https://www.npmjs.com/package/gulp-sourcemaps
const autoprefixer = require('autoprefixer');// Подключение Autoprefixer https://github.com/postcss/autoprefixer
const cssnext = require('cssnext');// Подключение postcss-cssnext http://cssnext.io/
const cssnano = require('cssnano');// Подключение минификатора http://cssnano.co/
const sass = require('gulp-sass');// Подключение SCSS плагина для компилирования файлов
//const browserSync = require('browser-sync');


const stylesheetsSources = './app/assets/styles/main.scss';
const cssDestination = './dist/assets/styles/main.css';
const jsDestination = './dist/assets/scripts';
const imgDestination = './dist/assets/img';
/**
 * Это описание задачи, которая будет переносить наш CSS из исходников в папку dist и при этом добавлять браузерные префиксы и мапы
 * @returns {*}
 */
let publishCssAndAddBrowserPrefixes = () => {
	let processors = [
		autoprefixer({
			remove: false, // указываем, что не нужно насильно удалять префиксы из нашего кода
			browsers: ['last 10 version'], // можем указать, какие браузеры поддерживать
		}),
		cssnext,
		cssnano({
			discardUnused: {
				fontFace: false // отключаем удаление не используемых font-face
			}
		}),
	];
	return gulp.src(stylesheetsSources)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(cssDestination))
};

/**
 * Тут мы регистрируем нашу вышеописанную задачу в гульпе
 */
gulp.task('publish-css', () => {
	return publishCssAndAddBrowserPrefixes()
});




gulp.task('publish-all-js', () => {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/isotope-layout/dist/isotope.pkgd.min.js',
		'./node_modules/slick-carousel/slick/slick.min.js',
	]).pipe(gulp.dest(jsDestination));
});

gulp.task('publish-all-img', () => {
	return gulp.src('./app/assets/img/*.*')
		.pipe(gulp.dest(imgDestination));
});


/**
 * Тут мы добавляем файл вотчер, который будет запускать publishCssAndAddBrowserPrefixes задачу при изменении css файлов
 */
gulp.task('watch', () => {
	return gulp.watch([stylesheetsSources], publishCssAndAddBrowserPrefixes)
});

/**
 * Тут мы добавляем файл вотчер, который будет запускать publishCssAndAddBrowserPrefixes задачу при изменении css файлов
 */
gulp.task('default', ['watch']);



