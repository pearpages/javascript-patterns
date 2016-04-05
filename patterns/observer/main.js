'use strict';

var Task = require('./task');
var Notification = require('./observers/notificationService');
var Logging = require('./observers/loggingService');
var Auditing = require('./observers/auditingService');

var task1 = new Task({
	name: 'whatever task',
	user: 'ppages'
});


var not = new Notification();
var ls = new Logging();
var audit = new Auditing();

task1.save();