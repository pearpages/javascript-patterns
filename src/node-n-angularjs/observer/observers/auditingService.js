module.exports = function () {
	var message = 'Auditing ';
	this.update = function (task) {
		console.log(message + task.user + ' for task ' + task.name);
	}
};