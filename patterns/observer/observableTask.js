var Task = require('./task');
var ObserverList = require('./observerList');

var ObservableTask = function (data) {
	Task.call(this, data);
	this.observers = new ObserverList();
};

var _p = ObservableTask.prototype = Object.create(Task.prototype);

_p.addObserver = function (observer) {
	this.observers.add(observer);
};

_p.notify = function (context) {
	var observerCount  = this.observers.count();
	for (var i = observerCount - 1; i >= 0; i--) {
		this.observers.get(i)(context);
	}
};

_p.save = function () {
	this.notify(this);
	Task.prototype.save.call(this);
};

module.exports = ObservableTask;