(function() {
    'use strict';

    angular.module("myApp")
    .factory('Task',['TaskRepository',Task]);

    function Task(TaskRepository) {
        var Task = function(data) {
            this.name = data.name;
            this.completed = data.completed;
        }

        Task.prototype.complete = function() {
            console.log('completing task: ' + this.name);
            this.completed = true;
            this.save();
        };

        Task.prototype.save = function () {
            TaskRepository.save(this);
        };

        return Task;
    }
})();