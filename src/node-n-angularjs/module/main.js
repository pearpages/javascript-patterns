'use strict';

var Task = require('../constructor/task');
var repo = require('./taskRepository');

repo.save(new Task({id: 1, name: 'First task'}));
repo.save(new Task({id: 2, name: 'Second task'}));

var task1 = repo.get(1);
var task2 = repo.get(2);

console.log(task1);
console.log(task2);