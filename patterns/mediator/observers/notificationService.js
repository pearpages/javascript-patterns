module.exports = function () {
	var message = 'Notifying ';
	this.update = function (task,optionalMessage) {
		if (optionalMessage !== undefined) {
			console.log(message + task.user + ' for task ' + task.name + ' and optional message ' + optionalMessage);	
		} else {
			console.log(message + task.user + ' for task ' + task.name);	
		}
		
	}
};