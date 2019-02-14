define( function ( require, exports, module ){
 
    var shuffler = require( "./shuffle" );
 
    exports.randomize = function( input ){
        return shuffler.shuffle( input );
    }
});