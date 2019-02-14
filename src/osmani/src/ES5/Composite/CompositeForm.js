var Field = function (id) { // implements Composite, FormItem
        this.id = id;
        this.element;
};
Field.prototype.add = function () {
};
Field.prototype.remove = function () {
};
Field.prototype.getChild = function () {
};
Field.prototype.save = function () {
        setCookie(this.id, this.getValue);
};





var CompositeForm = function (id, method, action) {
        this.formComponents = [];

        this.element.id = id;
        this.element.method = method || 'POST';
        this.element.action = action || '#';
};
CompositeForm.prototype.add = function (child) {

        this.formComponents.push(child);
        this.element.appendChild(child.getElement());
};
CompositeForm.prototype.remove = function (child) {
        for (var i = 0, len = this.formComponents.length; i < len; i++) {
                if (this.formComponents[i] === child) {
                        this.formComponents.splice(i, 1); // Remove one element from the array at 
// position i.
                        break;
                }
        }
};
CompositeForm.prototype.getChild = function (i) {
        return this.formComponents[i];
};
CompositeForm.prototype.save = function () {
        for (var i = 0, len = this.formComponents.length; i < len; i++) {
                this.formComponents[i].save();
        }
};
CompositeForm.prototype.getElement = function () {
        return this.element;
};

