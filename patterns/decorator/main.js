var Task = require('./common/task');
var UrgentTask = require('./urgentTask');

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var ut = new UrgentTask('This is urgent', 1);

ut.complete();
ut.save();

console.log(ut);