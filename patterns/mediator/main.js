var mediator = require('./mediator');

var Task = require('./task');

var task1 = new Task({
	name: 'demo task',
	user: 'John Doe'
});

task1.complete = function () {
	mediator.publish('complete', this);
	Task.prototype.complete.call(this);
};

task1.complete();

var not = new require('./observers/notificationService');
var ls = new require('./observers/loggingService');
var audit = new require('./observers/auditingService');

mediator.subscribe('complete', not, not.update); // channel, context, function
mediator.subscribe('complete', ls, ls.update); 
mediator.subscribe('complete', audit, audit.update); 