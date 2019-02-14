function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
}

LinkedList.prototype.forEach = function(callback) {
    var node = this.head;
    while(node) {
        callback(node.value);
        node = node.next;
    }
};

Linkedlist.prototype.print = function () {
    var result = [];
    this.forEach(function(value) {
        result.push(value);
    });
    return result.join(', ');
}

LinkedList.prototype.insertAfter = function (node,value) {
    var oldNext = node.next;
    var newNext = new Node(value);
    node.next = newNext;
    newNext = oldNext;
    if(this.tail === node) this.tail = newNext;
    return newNext;
}