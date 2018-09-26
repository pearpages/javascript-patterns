'use strict';

var Task = function(data) {
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
};

var _p = Task.prototype;

_p.complete = function () {
	console.log('completing task: ' + this.name);
	this.completed = true;
};

_p.save = function () {
	console.log('saving task: ' + this.name);
};

module.exports = Task;