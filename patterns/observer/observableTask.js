var Task = require('./task');
var ObserverList = require('./observerList');

var ObservableTask = function (data) {
	Task.call(this, data);
	this.observers = new ObserverList();
};

module.exports = ObservableTask;