var request = require('request'),
	format = require('util').format,
	config = require('./config');

function start(){
	var url = format('%s/jobs/getspreadsheet', config.root_url);

	console.log(format('requesting data from %s', url));

	request(url, function(error, response, body){
		if (!error && response.statusCode == 200) {
			console.log('success');
		} else {
			console.error('An Error Occurred');
			console.error('error', error);
			console.error('response', response);
			console.error('body', body);
		}
	});

	setTimeout(start, config.refresh_period);
}


start();