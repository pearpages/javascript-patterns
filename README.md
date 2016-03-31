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
  this.toString = function () {
    return this.param1 + ' ' + this.param2;
  }
}
```

### Prototypes

### Module Pattern

### Factory Pattern

### Singleton Pattern

## Structural Design Patterns

## Behavioral Design Patterns