module.exports = {
	root_url: process.env.fullon_root_url || "http://localhost",
	refresh_period: process.env.fullon_refresh_period || 5000,
	job_username: process.env.fullon_job_username || 'username',
	job_password: process.env.fullon_job_password || 'password'
}