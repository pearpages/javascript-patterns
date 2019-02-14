/*
I’ve often referred to this type of object as a “workflow” object in the past, 
but the truth is that it is a mediator. It is an object that handles the workflow between 
many other objects, aggregating the responsibility of that workflow knowledge into a 
single object. The result is workflow that is easier to understand and maintain.

Mediator Use
A mediator is best applied when two or more objects have an indirect working relationship,
and business logic or workflow needs to dictate the interactions and coordination of these
objects.
 */
var orgChart = {
 
  addNewEmployee: function(){
 
    // getEmployeeDetail provides a view that users interact with
    var employeeDetail = this.getEmployeeDetail();
 
    // when the employee detail is complete, the mediator (the 'orgchart' object)
    // decides what should happen next
    employeeDetail.on("complete", function(employee){
 
      // set up additional objects that have additional events, which are used
      // by the mediator to do additional things
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee){
        employee.save();
      });
 
    });
  },
 
  // ...
}