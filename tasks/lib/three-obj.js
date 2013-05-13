// Minify with three-obj.
// Source: https://github.com/makesites/three-obj

var threeOBJ = require('three-obj'), 
	fs = require('fs'), 
	path = require("path");

exports.init = function(grunt) {
	var exports = {},
		async = grunt.util.async;

	exports.parse = function(files, dir, options, callback) {
		options = options || {};
		
		grunt.verbose.write('Converting with three-obj...');

		var topLevel = null;
		// destination file
		var dest = "";
		///var output = ...

		// Grab and parse all source files
		
		async.forEach(files, function(file, cb) {
		//files.forEach(function(file){
			// find destination (error control?)
			dest = path.normalize( __dirname +"/../../../../"+ dir ) + ( (file.match(/[^/]*$/) ).pop().replace(/\.[^/.]+$/, ".js") );
			// normalize file path 
			file = path.normalize( __dirname +"/../../../../"+ file )
			
			if( options.minify ){
				topLevel = threeOBJ.minify(file, dest, function( data ){
					//console.log( data );
					return cb();
				});
			} else {
				topLevel = threeOBJ.convert(file, dest, function( data ){
					//console.log( data );
					return cb();
				});
			}
		//});
		}, function(error) {
			//console.log("DONE!!!");
			//done(!error);
			callback( dest );
			return true;
		});
		
		//return true;
	};

	return exports;
};