## Understanding Objects

```js
var myModule = {
    myProperty: 'someValue',
    // object literals can contain properties and methods. // here, another object is defined for configuration // purposes:
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    // a very basic method
    myMethod: function () {
        console.log('I can haz functionality?');
    },
    // output a value based on current configuration
    myMethod2: function () {
        console.log('Caching is:' + (this.myConfig.useCaching) ? 'enabled' : 'disabled');
    },
    // override the current configuration
    myMethod3: function (newConfig) {
        if (typeof newConfig == 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

myModule.myMethod(); // I can haz functionality
myModule.myMethod2(); // outputs enabled
myModule.myMethod3({
    language: 'fr',
    useCaching: false
}); // fr
```

## Example

```js
var testModule = (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log('counter value prior to reset:' + counter);
            counter = 0;
        }
    };
})();

// test
testModule.incrementCounter(); testModule.resetCounter();
```

```js
// example 2
var myNamespace = (function () {
    var myPrivateVar = 0;
    var myPrivateMethod = function (someText) {
        console.log(someText);
    };

    return {
        myPublicVar: "foo",
        myPublicFunction: function (bar) {
            myPrivateVar++; myPrivateMethod(bar);
        }
    };
})();
```

```js
// example 3
var basketModule = (function () {
    var basket = []; //private

    function doSomethingPrivate() {
        //...
    }
    function doSomethingElsePrivate() {
        //...
    }

    return { //exposed to public
        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        doSomething: doSomethingPrivate(),
        getTotal: function () {
            var q = this.getItemCount(), p = 0;
            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    }
}());
```