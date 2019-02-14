var Speedster = function () {
};
Speedster.prototype.assemble = function () {
};
Speedster.prototype.wash = function () {
};
var Lowrider = function () {
};
Lowrider.prototype.assemble = function () {
};
Lowrider.prototype.wash = function () {
};
var ComfortCruiser = function () {
};
ComfortCruiser.prototype.assemble = function () {
};
ComfortCruiser.prototype.wash = function () {
};


/* BicycleFactory namespace. */
var BicycleFactory = {
        createBicycle: function (model) {
                var bicycle;
                switch (model) {
                        case 'The Speedster':
                                bicycle = new Speedster();
                                break;
                        case 'The Lowrider':
                                bicycle = new Lowrider();
                                break;
                        case 'The Flatlander':
                                bicycle = new Flatlander();
                                break;
                        case 'The Comfort Cruiser':
                        default:
                                bicycle = new ComfortCruiser();
                }
                //Interface.ensureImplements(bicycle, Bicycle);
                return bicycle;
        }
};

/* BicycleShop class. */
var BicycleShop = function () {
};

BicycleShop.prototype = {
        sellBicycle: function (model) {
                var bicycle = BicycleFactory.createBicycle(model);


                bicycle.assemble();
                bicycle.wash();
                return bicycle;
        }
};

var shop = new BicycleShop();
shop.sellBicycle('The Speedster');

