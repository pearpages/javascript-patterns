var Subject = require('./Subject');
var Observer = require('./Observer');

var subject = Subject.create();

var observer1 = Observer.create(1);
var observer2 = Observer.create(2);
var observer3 = Observer.create(3);
var observer4 = Observer.create(4);

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);
subject.addObserver(observer4);

subject.notify('hello!');