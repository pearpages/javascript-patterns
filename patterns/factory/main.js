'use strict';

var repo = require('./repoFactory');

repo.user.save({id:1,name: 'ppages'});
repo.task.save({id:1,name: 'go to the shop'});
repo.project.save({id:1, name: 'awezzzome project'});

console.log(repo.user.get(1));
console.log(repo.task.get(1));
console.log(repo.project.get(1));