### Creating Objects

There are **3** ways of creating an object.

```js
// 1
var newObject = {};

// 2
var newObject = Object.create(null);

// 3
var newObject = new Object();
```

There are **4** ways of acessing properties of an object.

```js
// 1
newObject.someKey = 'Hello World';

// 2
newObject['someKey'];

// 3
Object.defineProperty(newObject, 'someKey', {
    value: 'for more control of the property\'s behavior',
    writable: true,
    enumerable: true,
    configurable: true
});

// or just

Object.defineProperty(newObject, 'name', {value: 'Pere'});

// 4

Object.defineProperties(newObject, {
    "someKey": {
        value: "Hello World",
        writable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
});

// or just

Object.defineProperties(newObject, {
    "someKey": {
        value: "Hello World"
    },
    "anotherKey": {
        value: "Foo bar"
    }
});
```
