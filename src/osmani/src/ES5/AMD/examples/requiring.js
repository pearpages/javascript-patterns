// Consider "foo" and "bar" are two external modules
// In this example, the "exports" from the two modules
// loaded are passed as function arguments to the
// callback (foo and bar) so that they can similarly be accessed
 
require(["foo", "bar"], function ( foo, bar ) {
    // rest of your code here
    foo.doSomething();
});