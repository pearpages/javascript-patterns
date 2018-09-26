(function() {
	'use strict';

	angular.module("myApp")
	.service('taskServiceFacade',['taskService',taskServiceFacade]);

	function taskServiceFacade(taskService) {

		return {
			completeAndNotify: completeAndNotify
		};

		function completeAndNotify() {
			TaskService.complete(task);
			if (task.completed === true) {
				TaskService.setCompleteDate(task);
				TaskService.notifyCompletion(task,task.user);
				TaskService.save(task);
			}
		}
	}
})();