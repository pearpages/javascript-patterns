// selection and insertion sort (and ir or in place)

function asc(a,b) {
    return a - b; // a > b
}
function desc(a,b) {
    return b - a; // a > b
}

var aux = [10,9,8,7,6,5].sort(asc);
var aux2 = [104,9,847,6,45].sort(asc);
var aux3 = [104,9,847,6,45].sort(desc);
console.log(aux); // [ 5, 6, 7, 8, 9, 10 ]
console.log(aux2); // [ 6, 9, 45, 104, 847 ]
console.log(aux3); // [ 847, 104, 45, 9, 6 ]

// F(n) = (n-1) * (n-1) * c
// F(n) = c(n^2) - 2cn + 1
// F(n) -> n^2

function bubbleSort(list,condition) {
    var n = list.length;
    for(var i=0; i < n; i++) {
        for(var j=0; j < n - 1; j++){
            if(condition(list[j],list[j+1]) > 0) {
                var aux = list[j];
                list[j] = list[j+1];
                list[j+1] = aux;
            }
        }
    }
    return list;
}

console.log(bubbleSort([104,9,847,6,45],asc));
console.log(bubbleSort([104,9,847,6,45],desc));