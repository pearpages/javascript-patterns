var command = require('./repo');

command.execute('save', {
    id: 1,
    name: 'Task 1',
    completed: false
});
command.execute('save', {
    id: 2,
    name: 'Task 2',
    completed: false
});
command.execute('save', {
    id: 3,
    name: 'Task 3',
    completed: false
});
command.execute('save', {
    id: 4,
    name: 'Task 4',
    completed: false
});

console.log(command.tasks);
console.log(command.commands);
command.replay();