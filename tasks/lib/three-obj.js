// Minify with three-obj.
// Source: https://github.com/makesites/three-obj

var threeOBJ = require('three-obj');
var fs = require('fs');

exports.init = function(grunt) {
  var exports = {};

  exports.minify = function(files, dest, options) {
    options = options || {};

    grunt.verbose.write('Minifying with three-obj...');

    var topLevel = null;
    
    ///var output = ...

    // Grab and parse all source files
    files.forEach(function(file){
      
      topLevel = threeOBJ.minify(file, {
        filename: file,
        toplevel: topLevel
      });
	  
    });

    return result;
  };

  return exports;
};