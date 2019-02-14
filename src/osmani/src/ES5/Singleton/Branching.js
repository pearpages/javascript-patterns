/* Branching Singleton */

/*
 * 
 * since the code that decides which object to use is only executed once) versus the drawback of higher memory usage.
 */
MyNamespace.Singleton = (function () {
        var objectA = {
                method1: function () {

                },
                method2: function () {

                }
        };
        var objectB = {
                method1: function () {

                },
                method2: function () {

                }
        };
        return (someCondition) ? objectA : objectB;

})();
