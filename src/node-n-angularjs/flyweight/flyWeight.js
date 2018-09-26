'use strict';

module.exports = function (project, priority, user, completed) {
	this.priority = priority;
	this.project = project;
	this.user = user;
	this.completed = completed;
};