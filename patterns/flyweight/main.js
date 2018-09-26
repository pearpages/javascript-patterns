'use strict';

var Task = require('./task');
var Ftask = require('./fTask');
var Collection = require('./taskCollection');
var Fcollection = require('./fTaskCollection');
var random = require('./random');
var factory = require('./flyweightFactory');

var total = 1500000;

function generateX(total,tasks) {
	for (var i = 0; i < total; i++) {
		tasks.add({
			name: 'task' + i,
			priority: random('priorities'),
			project: random('projects'),
			user: random('users'),
			completed: random('completed')
		});
	}
}


(function normal(){
	var initialMemory = process.memoryUsage().heapUsed;

	var tasks = new Collection();
	generateX(total,tasks);

	var afterMemory = process.memoryUsage().heapUsed;
	console.log('used memory ' + (afterMemory - initialMemory) / 1000000 + ' and flyweights number is: ' + tasks.getCount());	
})();

(function withFlyWeight(){
	var initialMemory = process.memoryUsage().heapUsed;

	var tasks = new Fcollection();
	generateX(total,tasks);

	var afterMemory = process.memoryUsage().heapUsed;
	console.log('used memory ' + (afterMemory - initialMemory) / 1000000 + ' and flyweights number is: ' + factory.getCount());	
})();