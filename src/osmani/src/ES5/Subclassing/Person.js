var Person = function( firstName, lastName ){
 
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = "male";
 
};


// a new instance of Person can then easily be created as follows:
var clark = new Person( "Clark", "Kent" );
 
// Define a subclass constructor for for "Superhero":
var Superhero = function( firstName, lastName, powers ){
 
    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
 
    Person.call( this, firstName, lastName );
 
    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};
 
Superhero.prototype = Object.create( Person.prototype );
var superman = new Superhero( "Clark", "Kent", ["flight","heat-vision"] );
console.log( superman );
 
// Outputs Person attributes as well as powers

var person2 = new Person();
console.log(person2 instanceof Superhero); //false
console.log(person2 instanceof Person); //true

var heroe = new Superhero();
console.log(heroe instanceof Person); //true