'use strict';

var ObservableTask = require('./observableTask');
var Notification = require('./observers/notificationService');
var Logging = require('./observers/loggingService');
var Auditing = require('./observers/auditingService');

var task1 = new ObservableTask({
	name: 'whatever task',
	user: 'ppages'
});


var not = new Notification();
var ls = new Logging();
var audit = new Auditing();

task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);

task1.save();

task1.removeObserver(ls.update);
task1.removeObserver(audit.update);

task1.save();