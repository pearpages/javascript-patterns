(function factoyPatternExample() {
    function Car(options) {
        this.color = options.color;
        this.turbo = options.turbo;
    }

    function Truck(options) {
        this.enclosedCargo = options.enclosedCargo;
        this.length = options.length;
    }

    function VehicleFactory() {
        VehicleFactory.prototype.vehicleClass = Car;
        VehicleFactory.prototype.getVehicle = function (options) {
            return new this.vehicleClass(options);
        }
    }

    var carFactory = new VehicleFactory();
    var car = carFactory.getVehicle({color: 'yellow', turbo: true});
    console.log(car instanceof Car, car);

    carFactory.vehicleClass = Truck;
    var mover = carFactory.getVehicle({enclosedCargo: true, length: 26});
    console.log(mover instanceof Truck, mover);
})();

(function anotherExample() {
    function Car(options) {
        this.color = options.color;
        this.turbo = options.turbo;
    }

    function Truck(options) {
        this.monster = options.monster;
        this.cylinders = options.cylinders;
    }

    function VehicleFactory() {
        VehicleFactory.prototype.vehicleClass = Car;
        VehicleFactory.prototype.getVehicle = function (options) {
            return new this.vehicleClass(options);
        }
    }

    function TruckFactory() {}
    TruckFactory.prototype = new VehicleFactory();
    TruckFactory.prototype.vehicleClass = Truck;

    var truckFactory = new TruckFactory();
    var bigfoot = truckFactory.getVehicle({monster: true, cylinders: 12});
    console.log(bigfoot instanceof Truck, bigfoot);
})();
