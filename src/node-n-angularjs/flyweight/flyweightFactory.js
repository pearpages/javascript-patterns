'use strict';

var FlyWeight = require('./flyweight');

module.exports = function (){
	var flyweights = {};
	
	return {
		get: get,
		getCount: getCount
	};

	function getCount() {
		var count = 0;
		for (var f in flyweights) count++;
			return count;
	}

	function get(project, priority, user, completed) {
		var index = project+priority+user+completed;
		if(!flyweights[index]) {
			flyweights[index] = new FlyWeight(project,priority,user,completed);
		}
		return flyweights[index];
	}
}();