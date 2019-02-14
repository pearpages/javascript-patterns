// Loops are more performant than recursion in JavaScript because every function call is added to the stack, state must be prserverve, etc.

// ES6 Tail-Call Optimization!!!

// Accumlators
// Function wrappers

function loop(x) {
    while(x >= 0) {
        console.log(x);
        x--;
    }
}

loop(10);

function re(x) {
    // recursive
    if(x === 0) {
        console.log(0);
        return;
    } else {
        console.log(x);
        return re(x-1);
    }
}

re(10);

function factorial(x) {
    var res = 1;
    for(var i=1; i <= x; i++) {
        res *= i;
    }
    return res;
}

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));