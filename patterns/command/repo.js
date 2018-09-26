'use strict';

var repo = function () {

    var tasks = {};
    var commands = [];
    var me = {
        get: get,
        save: save
    };

    return {
        execute: execute,
        tasks: tasks,
        commands: commands,
        replay: replay
    };

    function get (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from the db'
        };
    }

    function save (task) {
        tasks[task.id] = task;
        console.log('Saving "' + task.name + '" to the db');
    }

    function executeNoLog (name) {
        var args = Array.prototype.slice.call(arguments, 1);

        if (me[name]) {
            return me[name].apply(repo, args);
        }
        return false;
    }

    function execute (name) {
        var args = Array.prototype.slice.call(arguments, 1);

        commands.push({
            name: name,
            obj: args[0]
        });

        if (me[name]) {
            return me[name].apply(repo, args);
        }
        return false;
    }

    function replay () {
        for (var i = 0; i < commands.length; i++) {
            var command = commands[i];

            executeNoLog(command.name, command.obj);
        }
    }
}();

module.exports = repo;