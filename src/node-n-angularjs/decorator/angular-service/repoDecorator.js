(function() {
	'use strict';

	var app = angular.module("myApp");
	
	app.decorator('taskRepo',function ($delegate) {
		var oldSave = $delegate.save;
		$delegate.save = function (task) {
			console.log('Special loggin for task ' + task.name);
			oldSave(task);
		};

		return $delegate;
	});
})();