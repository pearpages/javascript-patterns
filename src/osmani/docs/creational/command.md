```js
(function commandPatternExample() {
    const CarManager = {
        requestInfo: function(model, id) {
            console.log(`The information for ${model} with ID ${id} is foobar`);
        },
        buyVehicle: function(model, id) {
            console.log(`You have successfully purchased Item ${id}, a ${model}`);
        },
        arrangeViewing: function (model, id) {
            console.log(`You have successfully booked a viewing of ${model} (${id})`);
        },
        execute: function (name) {
            return this[name] && this[name].apply(this, [].slice.call(arguments, 1));
        }
    }

    CarManager.execute("arrangeViewing", "Ferrari", "14523");
    CarManager.execute("requestInfo", "Ford Mondeo", "54323");
    CarManager.execute("requestInfo", "Ford Escort", "34232");
    CarManager.execute("buyVehicle", "Ford Escort", "34232");
})();
```