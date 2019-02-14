  var Utilities = {};

  // An internal function for creating assigner functions.
  Utilities.createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

Utilities.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };


  Utilities.hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');


  // Retrieve all the property names of an object.
  Utilities.allKeys = function(obj) {
    if (!Utilities.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (Utilities.hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

var extend = Utilities.createAssigner(Utilities.allKeys);

   


/*
They can be viewed as objects with attributes and methods that can be easily shared across a 
number of other object prototypes.
*/
var myMixins = {
 
  moveUp: function(){
    console.log( "move up" );
  },
 
  moveDown: function(){
    console.log( "move down" );
  },
 
  stop: function(){
    console.log( "stop! in the name of love!" );
  }
 
};

// A skeleton carAnimator constructor
function CarAnimator(){
  this.moveLeft = function(){
    console.log( "move left" );
  };
}
 
// A skeleton personAnimator constructor
function PersonAnimator(){
  this.moveRandomly = function(){ /*..*/ };
}
 
// Extend both constructors with our Mixin
extend( CarAnimator.prototype, myMixins );


myMixins.moveUp = function (){
	console.log('move UP UP UP');
};

extend( PersonAnimator.prototype, myMixins );
 
// Create a new instance of carAnimator
var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();
 
// Outputs:
// move left
// move down
// stop! in the name of love!

myAnimator.moveUp();

var another = new PersonAnimator();
another.moveUp();

/*
So in the example we can see that we extend by copying, not by reference.  So changing the
mixing does not change the objects that have already extended the mixing.
 */