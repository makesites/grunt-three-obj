
module.exports = function(grunt) {

	// Internal lib.
	var threeOBJ = require('./lib/three-obj').init(grunt),
			async = grunt.util.async;

	grunt.registerMultiTask('three_obj', 'Minify files with Three OBJ.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		if( !this.files.length ) return grunt.fail.warn("No source locations entered");
		// merge options with defaults
		var options = this.options({
			minify: false
		});
		var done = this.async();

		// Iterate over all src-dest file pairs.
		//this.files.forEach(function(f) {
		async.forEach(this.files, function(f, cb) {

			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			});

			// exit now if we have no src files
			if( !src.length ){
				var err = "No files were found in "+ f.orig.src;
				grunt.fail.warn(err);
				return done(err);
			}
			// #4 see if there;s a dest dir
			var dest = (typeof f.dest != "undefined") ? f.dest : false;

			// Minify files, warn and fail on error.
			var result;
			try {
				result = threeOBJ.parse(src, dest, options, function(err){
					grunt.log.writeln('Source "' + f.orig.src + '" parsed.');
					if (options.report) {
						contrib.minMaxInfo(result.min, result.max, options.report);
					}
					cb();
				});
			} catch (e) {
				var err = new Error('Compression failed.');
				if (e.msg) {
					err.message += ', ' + e.msg + '.';
				}
				err.origError = e;
				grunt.fail.warn(err);
			}

			// Concat minified source
			//var output = result.min;

			// Write the destination file.
			//grunt.file.write(f.dest, output);

			// Print a success message.
			//grunt.log.writeln('File "' + f.dest + '" created.');

			// ...and report some size information.
			//if (options.report) {
			//	contrib.minMaxInfo(result.min, result.max, options.report);
			//}
		}, function(error) {
			//console.log("DONE!!!");
			done(!error);
			return true;
		});

	});

};