/*
 * grunt-three-obj
 * Source: http://github.com/makesites/grunt-three-obj
 *
 * Created by [Makis Tracend]( [@tracend](http://github.com/tracend) )
 *
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//gruntfile : path.normalize( __dirname+'/../gruntfile.js'),
		// Before generating any new files, remove any previously-created files.
		//clean: {
		//	tests: ['tmp']
		//},

		// Configuration to be run
		three_obj: {
			options: {
				minify: false
			},
			 dist: {
				 src: ['./static/*.obj', './media/*.obj', './raw/*.obj'],
				/** @optional  - if provided the converted files will be saved in this folder instead */
				dest: './assets/'
			 }
		}

	});

	// Load this plugin's tasks
	//grunt.loadTasks('tasks');

	// By default clean the "tmp" dir, then run this plugin's tasks
	//grunt.registerTask('default', ['clean', 'three_obj']);
	grunt.registerTask('default', ['three_obj']);

}
