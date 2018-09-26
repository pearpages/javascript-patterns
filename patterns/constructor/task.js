'use strict';

var Task = function (data) {
	this.id = data.id;
	this.name = data.name;
	this.completed = data.completed || false;
};

Task.prototype.complete = function () {
	console.log('completing task: '+this.name);
	this.completed = true;
};

Task.prototype.save = function () {
	console.log('saving Task: ' + this.name);
};

module.exports = Task;