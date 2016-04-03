(function() {
    'use strict';

    angular.module("myApp")
    .factory('UrgentTask',['Task',UrgentTask]);

    function UrgentTask(Task) {
        var UrgentTask = function (name, priority) {
            Task.call(this,name);
            this.priority = priority;
        };

        var _p = UrgentTask.prototype = Object.create(Task.prototype);

        _p.notify = function () {
            console.log('notifying important people');
        };

        _p.save = function () {
            this.notify();
            console.log('do special stuff before saving');
            Task.prototype.save.call(this);
        };

        return UrgentTask;
    }
})();