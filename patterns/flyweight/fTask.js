'use strict';

var factory = require('./flyweightFactory');

var Task = function (data) {
	this.flyweight = factory.get(data.project,data.priority,data.user,data.completed);
	this.name = data.name;
};

module.exports = Task;