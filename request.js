var request = require('request'),
	format = require('util').format,
	config = require('./config'),

	url = format('%s/jobs/getspreadsheet', config.root_url),
	failureCount = 0,
	successCount = 0;

function start(){

	console.log(format('requesting data from %s', url));

	request({
		uri: url,
		auth: {
			//TODO: Hash values?
			user: config.job_username,
			pass: config.job_password
		}
	}, function(error, response, body){
		if (!error && response.statusCode === 200) {
			successCount++;
		} else {
			failureCount++;
			console.error(format('An Error Occured!\nerror: %j\nresponse: %j\nbody: %j', error, response, body));
		}

		console.log(format('done. successful requests: %d; failed requests: %d', successCount, failureCount));
		setTimeout(start, config.refresh_period);
	});


}


start();