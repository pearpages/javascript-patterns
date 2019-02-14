// Loops are more performant than recursion in JavaScript because every function call is added to the stack, state must be prserverve, etc.

// ES6 Tail-Call Optimization!!!

function fib(x) {
    if(x === 0) {
        return 0;
    } else if(x === 1) {
        return 1;
    } else {
        return fib(x-1) + fib(x-2);
    }
}

console.log(fib(5));

function fibonacci(x) {
    // with loop
    if( x === 0 ) {
        return 0;
    } else if( x === 1) {
        return 1;
    }
    var a = 0;
    var b = 1;
    for(var i=2; i<=x; i++ ){
        res = a + b;
        a = b;
        b = res;
    }
    return res;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * (factorial(x-1));
}

console.log(factorial(5));

// print array in reverse

function recursiveReverse(array) {
    if(array.length === 1) {
        console.log('val: '+array[array.length-1])
        return;
    }
    console.log('val: '+array[array.length-1]);
    recursiveReverse(array.slice(0,array.length-1));
}

recursiveReverse([1,2,3,4,5,6]);

function recursiveMultiplier(arr, num) {
    return arr.map( function (v) { return v * num } );
}

function recursiveMultiplier2 (arr, num) {
    var res = [];
    for(var i = 0; i < arr.length; i++) {
        res[i] = arr[i] * num;
    }
    return res;
}

console.log('map: '+recursiveMultiplier([1,2,3],9));
console.log('map: '+recursiveMultiplier2([1,2,3],9));