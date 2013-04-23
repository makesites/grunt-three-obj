
module.exports = function(grunt) {

	// Internal lib.
	var uglify = require('./lib/three-obj').init(grunt);
	
	grunt.registerMultiTask('three-obj', 'Minify files with Three OBJ.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			compress: {
				warnings: false
			},
			report: false
		});
	
		// Iterate over all src-dest file pairs.
		this.files.forEach(function(f) {
			
			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			});
			
			// Minify files, warn and fail on error.
			var result;
			try {
				result = uglify.minify(src, f.dest, options);
			} catch (e) {
				var err = new Error('Compression failed.');
				if (e.msg) {
					err.message += ', ' + e.msg + '.';
				}
				err.origError = e;
				grunt.fail.warn(err);
			}
			
			// Concat minified source
			var output = result.min;
			
			// Write the destination file.
			grunt.file.write(f.dest, output);
			
			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created.');
			
			// ...and report some size information.
			if (options.report) {
				contrib.minMaxInfo(result.min, result.max, options.report);
			}
		});
		
	});

};