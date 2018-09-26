var TaskService = function () {
	// ...
};

var TakServiceWrapper = function() {
	// we are using the module revealing pattern here
	
	return {
		completeAndNotify: completeAndNotify
	};

	function completeAndNotify (myTask) {
		TaskService.complete(myTask);
		if (myTask.completed == true) {
			TaskService.setCompleteDate(myTask);
			TaskService.notifyCompletion(myTask, myTask.user);
			TaskService.save(myTask);
		}
	}
};

module.exports = TakServiceWrapper();