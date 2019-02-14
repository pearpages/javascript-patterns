(function usingObjectCreate() {
    var someCar = {
        drive: function () {},
        name: 'Mazda 3'
    }

    var anotherCar = Object.create(someCar);
    console.log(anotherCar.name);
    someCar.name = 'Honda Civic';
    console.log(anotherCar.name, someCar.name); // Both objects reference to the same property
})();


(function anotherExampleWithObjectCreate() {
    const MY_GLOBAL = {
        id: 0,
        nextId: function () {
            return ++this.id;
        }
    };

    var vehicle = {
        getModel: function() {
            console.log('The model of this vehicle is...' + this.model);
        }
    }

    var car = Object.create(vehicle, {
        'id': {
            value: MY_GLOBAL.nextId(),
            enumerable: true // writable: false, configurable: false by default
        },
        'model': {
            value: 'Ford',
            enumerable: true
        }
    });

    car.getModel();
    console.log(car.id);
})();


(function withoutObjectCreate() {
    // Without using the Object.create

    var vehiclePrototype = {
        init: function (carModel) {
            this.model = carModel;
        },
        getModel: function() {
            console.log('The model of this vehicle is..' + this.model);
        }
    };

    function vehicle(model) {
        function F() {};

        F.prototype = vehiclePrototype;

        var f = new F();

        f.init(model);
        return f;
    }

    var car = vehicle('Ford Escort');
    car.getModel();
})();

(function anotherExampleWithoutObjectCreate() {
    var beget = (function () {
        function F() {}

        return function (proto) {
            F.prototype = proto;
            return new F();
        }
    })();

    const house = {
        doors: 4,
        windows: 3
    }
    const newObject = beget(house);
    console.log(newObject.doors);
    house.doors = 2;
    console.log(newObject.doors, house.doors); // both have changed
})();