'use strict';

var Task = require('./task');
var tasks = require('./taskCollection');
var random = require('./random');

var initialMemory = process.memoryUsage().heapUsed;

for (var i = 0; i < 10000; i++) {
	tasks.add({
		name: 'task' + i,
		priority: random('priorities'),
		project: random('projects'),
		user: random('users'),
		completed: random('completed')
	});
}

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' + (afterMemory - initialMemory) / 1000000);