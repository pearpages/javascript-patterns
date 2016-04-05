var mediator = require('./mediator');

var Task = require('./task');

// overwritting original complete function
Task.prototype.complete = function (){
	console.log('Completed task '+this.name);
	mediator.publish('complete', this, 'hellooooooo');
};

var Not = new require('./observers/notificationService');
var Ls = new require('./observers/loggingService');
var Audit = new require('./observers/auditingService');

var task1 = new Task({
	name: 'demo task',
	user: 'John Doe'
});

var task2 = new Task({
	name: 'buy toilet papper',
	user: 'Pere Pages'
});

var not = new Not();
var ls = new Ls();
var audit = new Audit();

mediator.subscribe('complete', not, not.update); // channel, context, function
mediator.subscribe('complete', ls, ls.update); 
mediator.subscribe('complete', audit, audit.update); 

task1.complete();
task2.complete();