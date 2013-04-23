/*
 * grunt-three-obj
 * Source: http://github.com/makesites/grunt-three-obj
 *
 * Created by [Makis Tracend](http://tracend.me)
 * 
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */
 
'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		
		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},
		
		// Configuration to be run
		three_obj: {
			compress: {
				files: {
					'tmp/**/*.js': ['media/**/*.js']
				},
				options: {}
			}
		}
		
	});

	
	// Load this plugin's tasks
	grunt.loadTasks('tasks');
	
	// By default clean the "tmp" dir, then run this plugin's tasks
	grunt.registerTask('default', ['clean', 'three-obj']);

}
