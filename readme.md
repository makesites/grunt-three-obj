# Grunt Three OBJ

Grunt tasks for bulk conversion of OBJ files to Three.js JSON, using [three-obj](http://github.com/makesites/three-obj)


## Install

Install grunt-three-obj next to your project's gruntfile with:
```
npm install grunt-three-obj
```
This plugin requires Grunt ~0.4.0

## Usage

Simply add this line to your project's Gruntfile.js gruntfile:
```
grunt.loadNpmTasks('grunt-three-obj');
```
Then specify your config:
```
	grunt.initConfig({
		three_obj: {
			options: {
				/** @optional  - if true the files are converted to binary JSON */
				minify: false
			},
			dist: {
				/** @required  - string (or array of) including grunt glob variables */
				src: ['./static/*/*.obj', './media/*/*.obj', './raw/*/*.obj'],
				/** @optional  - if provided the converted files will be saved in this folder instead */
				dest: './assets/'
			}
		}
	});
```

## Credits

Created by Makis Tracend ( [@tracend](http://tracend.me) )

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)