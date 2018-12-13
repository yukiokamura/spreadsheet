/*******************

*******************/

var dest = './dist';
var src = './src';

var path = require('path');
var relativeSrcPath = path.relative('.', src);

var config = {
	project:'dist',
	dest:dest,
	src:src,
	concat:{
		libs:[
			src+'/js/libs/*',
			`!${src}/js/libs/_*`
		],
		dest:dest+'/assets/js/'
	}
};

module.exports = config;
