// With AMD, it's possible to load in assets of almost any kind
// including text-files and HTML. This enables us to have template
// dependencies which can be used to skin components either on
// page-load or dynamically.
 
define( ["./templates", "text!./template.md","css!./template.css" ],
 
    function( templates, template ){
        console.log( templates );
        // do something with our templates here
    }
 
});