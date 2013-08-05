var format = require('util').format,
	_ = require('underscore');

var config = {
	root_url: process.env.fullon_root_url || "http://localhost",
	refresh_period: process.env.fullon_refresh_period || 5000,
	job_username: process.env.fullon_job_username || 'username',
	job_password: process.env.fullon_job_password || 'password'
}

var errors = [];
_.each(config, function(item, i) {
	if(!item) {
		errors.push(i);
	}
});

if(errors.length) {
	//crash application
	console.warn(format('missing config entries for: %j', errors));
}

module.exports = config;