'use strict';

var Task = require('./task');

(function run(Task) {
	var task1 = new Task('Go to the Mall');
	var task2 = new Task('Buy food');
	var task3 = new Task('Do some exercise');
	var task4 = new Task('Meet Jane');

	task1.complete();
	task1.save();
	task2.save();
	task3.save();
	task4.save();	
})(Task);
