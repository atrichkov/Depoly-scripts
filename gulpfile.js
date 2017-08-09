let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
const config = require('./config/config.json');

gulp.task('minify-css', () => {
	console.log('--------------------------------------------------');
	console.log('Current minify configuration:');
	console.log('CSS file read directory: ' + config.minify_css.read_dir);
	console.log('CSS files build directory: ' + config.minify_css.build_dir);
	console.log('--------------------------------------------------');
	
	let query = require('cli-interact').getYesNo;
	var answer = query('Configuration is ok ?');
	if (answer === false) {
		console.log('Change configuration in ' + __dirname + '/config/config.js');
		console.log('Minify Interrupted!');
		return;
	} else {
		console.log('Compilation...');
		
		return gulp.src(config.minify_css.read_dir)
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(config.minify_css.build_dir));
	}
});