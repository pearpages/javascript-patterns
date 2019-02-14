# Singleton Pattern

You can achieve the same at least with **10** different ways.

```js
// 1
var mySingleton = {
    property1: 'something',
    property2: 'something else',
    method1: function () {
        console.log('hello world');
    }
};
```

```js
// 2
// With private properties or methods
var mySingleton = function () {
    var privateVariable = 'something private';

    function showPrivate() {
        console.log(privateVariable);
    }

    return {
        publicMethod: function () {
            showPrivate();
        }
        publicVar: 'the public can see this!'
    };
}();

mySingleton.publicMethod();
mySingleton.publicVar;
```

```js
// 3
// With lazy creation
var Singleton = (function () {
    var instantiated;

    function init() {
        return {
            publicMethod: function() {
                console.log('hello world');
            },
            publicProperty: 'test'
        };
    }

    return {
        getInstance: function() {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    }
})();

Singleton.getInstance().publicMethod();
```

```js
// 4
// with a constructor function
var Singleton = (function (){
    var instance;

    function Singleton(options) {
        options = options || {};
        this.name = 'Singleton';
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }

    return {
        getInstance: function (options) {
            if (!instance) {
                instance = new Singleton(options);
            }
            return instance;
        }
    }
})();
```

```js
// ES6 does not have private properties
// One way is to use modules
function Instance() {
    let privateValue = 5;
    this.publicValue = 3;
    this.getPrivateValue = () => privateValue;
    this.setPrivateValue = value => privateValue = value;
}

class Singleton {
    static singleton;

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = new Instance();
    }

    static getInstance() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = new Instance();
        return Singleton.instance;
    }
}
```
