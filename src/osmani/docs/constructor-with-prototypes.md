```js
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function() {
    return this.model + " has done " + this.miles + " miles";
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("For Mondeo", 2010, 5000);
```

or

```js
class Car {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    toString() {
        return this.model + " has done " + this.miles + " miles";
    }
}
```