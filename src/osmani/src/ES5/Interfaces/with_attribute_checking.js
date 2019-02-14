function addForm(formInstance) {
        if (!implements(formInstance, 'Composite', 'FormItem')) {
                throw new Error('Object does not implement a required interface."');
        }
}

function implements(object) {

        for (var i = 1; i < arguments.length; i++) {
                //looping through all arguments after the first one

                var interfaceName = arguments[i];
                var interfaceFound = false;

                for (var j = 0; j < object.implementsInterfaces.length; j++) {
                        if (object.implementsInterfaces[j] === interfaceName) {
                                interfaceFound = true;
                                break;
                        }
                }

        }
        if (!interfaceFound) {
                return false;
        }
        return true;
}


/*
 * try the code
 * 
 * 
 */

var form = {
        implementsInterfaces: ['Composite', 'FormItem']
};

console.log(addForm(form));