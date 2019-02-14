```js
(function mixinExample() {
    // Car
    var Car = function (settings) {
        this.model = settings.model || 'no model provided';
        this.colour = settings.colour || 'no colour provided';
    }

    // Mixin
    var Mixin = function () { };
    Mixin.prototype = {
        driveForward: function () {
            console.log('drive forward');
        },
        driveBackward: function () {
            console.log('drive backward');
        }
    }

    // Augment existing 'class' with a method from another
    function augment(receivingClass, givingClass) {
        if (arguments[2]) {
            // provide only certain methods
            const methods = [].slice.call(arguments, 2);
            methods.forEach(method => receivingClass.prototype[method] = givingClass.prototype[method]);
        } else {
            // provide all methods
            for(let methodName in givingClass.prototype) {
                if (!receivingClass.prototype[methodName]) {
                    receivingClass.prototype[methodName] = givingClass.prototype[methodName];
                }
            }
        }
    }

    augment(Car, Mixin, 'driveForward', 'driveBackward');

    var vehicle = new Car({model: 'Ford Escort', colour: 'blue'});

    // Test to make sure we now have access to the methods
    vehicle.driveForward();
    vehicle.driveBackward();
})();
```
