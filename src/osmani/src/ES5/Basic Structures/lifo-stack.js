function Lifo() {
    var stack = [];

    return {
        push: push,
        pop: pop
    }

    function push (element) {
        stack.push(element);
        return this;
    }

    function pop() {
        return stack.pop();
    }
}

var myLifo = new Lifo();
myLifo.push(3).push(5).push(10);

console.log(myLifo.pop()); // 10
console.log(myLifo.pop()); // 5
console.log(myLifo.pop()); // 3
console.log(myLifo.pop()); // undefined


var Stack = function () {
    this.storage = "";
}

Stack.prototype.push = function(val) {
    if(this.storage === "") {
        this.storage = val;
    } else {
        this.storage += '_' + val;
        // or this.storage.concat('_',val);
    }
    return this;
};
Stack.prototype.pop = function() {
    var i = this.storage.lastIndexOf('_');
    var res = this.storage.slice(i+1);
    this.storage = this.storage.substring(0,i);
    return res;
};
Stack.prototype.size = function() {
    return this.storage.split('_').length;
};

var stringStack = new Stack();
stringStack.push('hello').push('me').push('marta');
console.log(stringStack.size()); // 3
console.log(stringStack.pop()); // marta
console.log(stringStack.pop()); // me
console.log(stringStack.pop());  // hello
console.log(stringStack.pop()); // ''
console.log(stringStack.pop()); // ''

function MinStack() {
    this._stack = [];
    this._min = [];
}

function _pushMinimum(stack,value) {
    if(stack.length === 0) {
        stack.push(value);
    } else {
        if (stack[stack.length-1] > value) {
            stack.push(value);
        } else {
            stack.push(stack[stack.length-1]);
        }
    }
    return stack;
}

MinStack.prototype.push = function (value) {
    var s = this._stack;
    var m = this._min;
    this._min = _pushMinimum(this._min,value);
    s.push(value);
    return this;
}

MinStack.prototype.pop = function () {
    this._min.pop();
    return this._stack.pop();
};

MinStack.prototype.getMinimum = function () {
    return this._min[this._min.length-1];
}

var stackMin = new MinStack();
stackMin.push(100).push(2).push(5).push(4).push(9).push(6);
console.log(stackMin.getMinimum()); stackMin.pop();
console.log(stackMin.getMinimum()); stackMin.pop();
console.log(stackMin.getMinimum()); stackMin.pop();
console.log(stackMin.getMinimum()); stackMin.pop();
console.log(stackMin.getMinimum()); stackMin.pop();
console.log(stackMin.getMinimum()); stackMin.pop();
console.log(stackMin.getMinimum()); stackMin.pop();