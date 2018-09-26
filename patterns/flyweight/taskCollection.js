'use strict';

var Task = require('./task');

var TaskCollection = function () {
	var tasks = {};
	var count = 0;

	return {
		add: add,
		get: get,
		getCount: getCount
	};

	function add (data) {
		tasks[data.name] = new Task(data);
		count++;
	}

	function get (name) {
		return tasks[name];
	}

	function getCount() {
		return count;
	}

};

module.exports = TaskCollection;

