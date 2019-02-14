function Car (doors, drivers) {
    this.doors = doors;
    this.drivers = drivers;
}

Car.prototype.getDoors = function () {
    return this.doors;
}

Car.prototype.getDrivers = function() {
    return this.drivers;
}

Car.prototype.getDescription = function () {
    return "This car has "+this.doors+" doors and "+this.drivers+" drivers.";
}

var car = new Car(3,2);
console.log(car.getDescription()); // This car has 3 doors and 2 drivers.