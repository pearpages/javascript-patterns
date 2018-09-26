(function() {
	'use strict';

	var app = angular.module("myApp");

	var taskRepo = function () {
		var tasks = {};

		return {
			get: get,
			save: save
		};

		function get(id) {
			console.log('Getting task '+ id);
			return tasks[id];
		}

		function save(task) {
			console.log('Saving ' + task.name + ' to the db');
			tasks[task.id] = task;
		}
	}

	app.service('taskRepo',taskRepo);

	
})();