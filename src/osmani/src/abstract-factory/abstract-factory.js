(function abstractFactoryExample() {
    var AbstractVehicleFactory = (function () {
        var types = {};

        return {
            getVehicle: function (type, customizations) {
                var Vehicle = types[type];

                return (Vehicle) ? new Vehicle(customizations): null;
            },

            registerVehicle: function (type, Vehicle) {
                var proto = Vehicle.prototype;

                // only register classes that fulfill the vehicle contract
                if (proto.drive && proto.breakDown) {
                    types[type] = Vehicle;
                }

                return AbstractVehicleFactory;
            }
        }
    })();
})();