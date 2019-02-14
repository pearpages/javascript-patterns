/*
The Command pattern aims to encapsulate method invocation, requests or operations into a
 single object and gives us the ability to both parameterize and pass method calls around that 
 can be executed at our discretion. In addition, it enables us to decouple objects invoking the 
 action from the objects which implement them, giving us a greater degree of overall flexibility 
 in swapping out concrete classes (objects).

 The general idea behind the Command pattern is that it provides us a means to separate the 
 esponsibilities of issuing commands from anything executing commands, delegating this 
 responsibility to different objects instead.
 */

(function(){
 
  var carManager = {
 
    // request information
    requestInfo: function( model, id ){
      return "The information for " + model + " with ID " + id + " is foobar";
    },
 
    // purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    },
 
    // arrange a viewing
    arrangeViewing: function( model, id ){
      return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }

  };

  carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};

console.log(carManager.execute( "arrangeViewing", "Ferrari", "14523" ));
console.log(carManager.execute( "requestInfo", "Ford Mondeo", "54323" ));
console.log(carManager.execute( "requestInfo", "Ford Escort", "34232" ));
console.log(carManager.execute( "buyVehicle", "Ford Escort", "34232" ));
 
})();

