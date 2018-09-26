var Task = require('./common/task');

var UrgentTask = function (name, priority) {
    // Calling the parent constructor
    Task.call(this, name);
    this.priority = priority;
};

// Overwritting the prototype so we don't 'mess' witht the parent
var _p = UrgentTask.prototype = Object.create(Task.prototype);

 _p.notify = function () {
    console.log('notifying...');
 };

_p.save = function() {
    this.notify();
    Task.prototype.save.call(this); // we call the original save here
};

module.exports = UrgentTask;