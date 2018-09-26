module.exports = function () {
	var message = 'Logging ';
	this.update = function (task) {
		console.log(message + task.user + ' for task ' + task.name);
	}
};