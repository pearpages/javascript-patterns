+ Introduction
+ Objects in Javascript
+ Creational Design Patterns
+ Structural Design Patterns
+ Behavioral Design Patterns

## Introduction

> "... each pattern represents our current best guess as to what arrangement of the physical environment will work to sovle the problem represented." [Cristopher Alexander](https://en.wikipedia.org/wiki/Christopher_Alexander) 

> [A Pattern Language](https://en.wikipedia.org/wiki/A_Pattern_Language): Towns, Buildings, Construction (1977) described a practical architectural system in a form that a theoretical mathematician or computer scientist might call a generative grammar.

> "The empirical questions center on the *problem*
- does it occur and is it felt in the way we have described it?"

> "and the solution
-does the arrangement we propose *resolve* the problem?"

### [The Gang of Four](https://en.wikipedia.org/wiki/Design_Patterns)

|Problems|Soluctions|
|:--|:--|
| Designing Service Layers | Module Pattern |
| Overly Complicated Object Interfaces | Façade Pattern |
| Visibility Into State Changes | Observer Pattern |

### What constitutes a pattern

+ It solves a problem
+ It is a proven concept
+ The solution is not obvious
+ It described a relationship
+ It has a significant human component

Patterns also give us a common vocabulary

### Types of patterns

+ Creational (new instances of an object)
  - Constructor
  - Module
  - Factory
  - Singleton
+ Structural (makeup of the objects itselves)
  - Decorator
  - Façade
  - Flyweight
+ Behavioral (how objects relate to each other)
  - Command
  - Mediator
  - Observer

## Objects in Javascript

### Creating Objects

```javascript
var obj = {};
var nextObj = Object.create(Object.prototype); // we usually use it for inheritance
var lastObj = new Object(); // not very used because in ES6 we have 'classes' now
```

### Reading and Writing Attributes

```javascript
var obj = {};
obj.param = 'new value';
console.log(obj.param);
```

```javascript
var obj = {};
obj['param'] = 'new value';
console.log(obj['param']);
```

```javascript
var obj = {};
var val = 'value';
obj[val] = 'new value';
console.log(obj[val]); // new value
```

### Define Property

```javascript
Object.defineProperty(obj, 'name', {
  value: 'my name',
  writable: true,
  enumerable: true,
  configurable: true
});
```

```javascript
var task = {
  title: 'My Title',
  description: 'My Description'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

// the following won't work because we already set the property to false
Object.defineProperty(task, 'toString', {
  enumerable: true
});

task.toString = 'hi'; // it won't change because we defined the property as not writable

console.log(Object.keys(task)); // it won't show toString because we've defined as not enumerable
```

### Inheritance

```javascript
var task = {
  title: 'My Title',
  description: 'My Description'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false
});
```

```javascript
var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' ' + is urgent;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(urgentTask.toString()); // My Title is urgent
```

## Creational Design Patterns

### Constructor Pattern

Create objects from functions. The name of our function will be the name of our objects.

When using the **new** keyword

+ Creates a new object
+ Links to an object prototype
+ Bind 'this' to the new object scope
+ Implicitly returns 'this'

```javascript
function MyObject(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function () { // <-- check Prototypes section
    return this.param1 + ' ' + this.param2;
  }
}
```

#### Example

```javascript
var Task = function (name) {
  this.name = name;
  this.completed = false;

  this.complete = function () {
    console.log('completing task: '+this.name);
    this.completed = true;
  };

  this.save = function () {
    console.log('saving Task: ' + this.name);
  };
};

var task1 = new Task('Go to the Mall');
var task2 = new Task('Buy food');
var task3 = new Task('Do some exercise');
var task4 = new Task('Meet Jane');

task1.complete();
task1.save();
task2.save();
task3.save();
task4.save();
```

#### Prototypes

> An encapsulation of properties that an object links to.

Signature

```javascript
ClassName.prototype.methodName = function (arguments) {};
```

```javasccript
var Task = function (name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function () {
  console.log('completing task: '+this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('saving Task: ' + this.name);
};
```

#### Classes

If we are not using node we may need use a Transpiler like [Babel](https://babeljs.io/).

```javascript
'use strict'

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  };

  complete() {
    console.log('completing task: '+this.name);
    this.completed = true;
  };

  save() {
    console.log('saving Task: ' + this.name);
  };
}

module.exports = Task;
``` 

#### Constructor in Angular

There are several ways of doing this. We could also use *value* for example.

```javascript
(function() {
  'use strict';

  angular.module("myApp")
  .factory('Task',function () {
    var Task = function (name) {
      this.name = name;
      this.completed = false;
    };

    Task.prototype.complete = function () {
      console.log('completing task: '+this.name);
      this.completed = true;
    };

    Task.prototype.save = function () {
      console.log('saving Task: ' + this.name);
    };

    return Task;
  });

})();
```

### Module Pattern

In it's core is just an **object literal**. 

We have one instance of it. Generally we use if tor services.

```javascript
var Module = function () {
  var privateVar = 'I am private ...';
  return {
    method1: function () {},
    method2: function () {}
  }
}
```

#### Revealing Module Pattern

```javascript
var repo = function () {

  var tasks = {};

  return {
    get: get,
    save: save
  };

  function get(id) {
    console.log('Getting task '+ id);
    return tasks[id];
  }

  function save(task) {
    console.log('Saving ' + task.name + ' to the db');
    tasks[task.id] = task;
  }
}

module.exports = repo();
```

#### Module Pattern in Angular

```javascript
(function() {
  'use strict';

  var app = angular.module("myApp");

  var taskRepo = function () {
    var tasks = {};

    return {
      get: get,
      save: save
    };

    function get(id) {
      console.log('Getting task '+ id);
      return tasks[id];
    }

    function save(task) {
      console.log('Saving ' + task.name + ' to the db');
      tasks[task.id] = task;
    }
  }

  app.service('taskRepo',taskRepo);

  
})();
```

### Factory Pattern

+ Simplifies object creation
+ Creating different objects based on need
+ Repository creation

```javascript
var repoFactory = function () {
  var repos = this; // used as cache
  // repoList could come from anywhere
  var repoList = [
    {name: 'task', source: './taskRepository'},
    {name: 'user', source: './userRepository'},
    {name: 'project', source: './projectRepository'}
  ];

  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)();
  });
};

module.exports = new repoFactory;
```

### Singleton Pattern

> Used to restrict an object to one instance of that object across the application.

```javascript
'use strict';

var TaskRepo = (function () {
  var taskRepo;
  function createRepo() {
    var taskRepo = new Object('Task');
    return taskRepo;
  }
  return {
    getInstance: function () {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  }
})();
```

#### Singletons in Node 

Node.js that uses CommonJS, caches everything that is used in a *require*.

> Modules are cached after the first time they are loaded.

> If you want to have a module execute code multiple times, then export a function, an call that function.

So if we want to have a Singleton we have to do the opposite: call the function.

```javascript
// repo.js
'use strict';

var repo = function () {

  var called = 0;

  var save = function (task) {
    called++;
    console.log('Saving ' + task + ' Called ' + called + ' times');
  }
  console.log('newing up task repo');
  return {
    save: save
  }
}
module.exports = new repo; // we make it a Singleton
```

Now everytime we require *repo.js* will get the same instance.

#### Singletons in Angular

> All Services are singletons; they get instantiated once per app. They can be of any type, whether it be a primitive, object literal, function, or even an instance of a custom type.

> The value, factory, service, constant, and provider methods are all providers. They teach the Injector how to instantiate the Services.

[Stackoverflow service vs provider vs factory](http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory)

## Structural Design Patterns

> Concerned with how objects are made up and simplify relationships between objects.

+ Deal with relationship of objects
  - Extend functionality
  - Simplify functionality

### Decorator

> Used to add new functionality to an existing object, without being obtrusive.

+ More complete inheritance
+ Wraps an object
+ Protects existing objects
+ Allows extended functionality

#### Decorating a single Object

```javascript
var Task = function (name) {
  // ...
}

Task.prototype.complete = function () {
  // ...
}

Task.prototype.save = function () {
  // ...
}
```

Now we decorate this object to create a new one

```javascript
var myTask = new Task('Urgent Task');

urgentTask.priority = 2; // new attribute

// new method notify
urgentTask.notify = function() {
  console.log('notifying...');
};

// calling the original save
urgentTask.save = function () {
  this.notify();
  Task.prototype.save.call(this); // we call right here
};
```

#### Creating multiple decorated Objects (subtype)

```javascript
var Task = require('./common/task');

var UrgentTask = function (name, priority) {
    // Calling the parent constructor
    Task.call(this, name);
    this.priority = priority;
};

// Overwritting the prototype so we don't 'mess' witht the parent
var _p = UrgentTask.prototype = Object.create(Task.prototype);

 _p.notify = function () {
    console.log('notifying...');
 };

_p.save = function() {
    this.notify();
    Task.prototype.save.call(this); // we call the original save here
};

module.exports = UrgentTask;
```

#### Decorating objects in Angular

```javascript
function TaskController(Task,UrgentTask, TaskRepository) {
  var ctrl = this;
  ctrl.tasks = [];
  ctrl.taks.push(new Task(TaskRepositoryget(1)));
  ctrl.taks.push(new Task(TaskRepositoryget(2)));
  ctrl.taks.push(new UrgentTask(TaskRepositoryget(3)));
  ctrl.taks.push(new UrgentTask(TaskRepositoryget(4)));
}
```

```javascript
(function() {
    'use strict';

    angular.module("myApp")
    // pay attention to the dependency
    .factory('UrgentTask',['Task',UrgentTask]);

    function UrgentTask(Task) {
        var UrgentTask = function (name, priority) {
            // calling the 'parent'
            Task.call(this,name);
            this.priority = priority;
        };

        // create a new independent prototype
        var _p = UrgentTask.prototype = Object.create(Task.prototype);

        // decorating
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
```

#### Decorating Angular Services

Mainly we decorate an Angular Service so we can do some *configuration* on it.

```javascript
(function() {
  'use strict';

  var app = angular.module("myApp");
  
  // $delegate is the original service
  app.decorator('taskRepo',function ($delegate) {
    var oldSave = $delegate.save;
    $delegate.save = function (task) {
      console.log('Special loggin for task ' + task.name);
      oldSave(task);
    };

    return $delegate;
  });
})();
```

### Facade

> Used to rpovied a simplified interface to a complicated system.

+ Facade hides the complexity from us
+ Simplifies the interface
+ jQuery is a good example (think of the DOM)

### Flyweight

## Behavioral Design Patterns