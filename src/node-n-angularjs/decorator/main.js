var Task = require('./common/task');
var UrgentTask = require('./urgentTask');

// 'normal' object

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// decorated object

var ut = new UrgentTask('This is urgent', 1);

ut.complete();
ut.save();

console.log(ut);