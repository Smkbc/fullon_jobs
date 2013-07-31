var request = require('request'),
	format = require('util').format;

function start(){
	console.log('http://localhost/jobs/getspreadsheet', function(error, response, body){
		if (!error && response.statusCode == 200) {
			console.log('success');
		} else {
			console.log('error', error, response, body);
		}
	});

	setTimeout(start, process.env.fullon_job_refresh_period);
}


start();