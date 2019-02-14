function Fifo() {
    var array = [];

    return {
        enque: enque,
        deque: deque,
        size: size
    }

    function enque(element) {
        array.push(element);
        return this;
    }

    function size() {
        return array.length;
    }

    function deque() {
        return array.shift();
    }
}

var myFifo = new Fifo();

myFifo.enque(3).enque(5).enque(10).enque(20);
console.log(myFifo.size()); // 4
console.log(myFifo.deque()); // 3
console.log(myFifo.deque()); // 5
console.log(myFifo.deque()); // 10
console.log(myFifo.deque()); // 20
console.log(myFifo.deque()); // undefined
console.log(myFifo.deque()); // undefined
