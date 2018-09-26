'use strict';

var Task = function (name) {
    this.name = name;
    this.completed = false;
};

var _p = Task.prototype;

_p.complete = function () {
    console.log('completing task ' + this.name);
};

_p.save = function () {
    console.log('saving...');
};

module.exports = Task;