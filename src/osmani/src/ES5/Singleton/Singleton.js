var MyNamespace = {};

MyNamespace.Singleton = (function () {

        var uniqueInstance = null;

        function constructor() {
                // Private members.
                var privateAttribute1 = false;
                var privateAttribute2 = [1, 2, 3];
                function privateMethod1() {

                }

                function privateMethod2(args) {

                }
                
                return {
                        publicAttribute1: 'a',
                        publicAttribute2: 'b',
                        getPrivateAttribute1: function (){
                                return privateAttribute1;
                        },
                        getPrivateAttribute2: function (){
                                return privateAttribute2;
                        }
                };
        }

        return {
                getInstance: function () {
                        if (!uniqueInstance) { // Instantiate only if the instance doesn't exist.
                                uniqueInstance = constructor();
                        }
                        return uniqueInstance;
                }
        };

})();

//test the code
console.log(MyNamespace.Singleton.getInstance().getPrivateAttribute2());