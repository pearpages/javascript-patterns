function quicksort(array, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = array.length-1;

    if (lo < hi) {
        var p = partition(array, lo, hi);

        quicksort(array, lo, p-1);
        quicksort(array, p+1, hi);
    }

    if( hi-lo === array.length -1) return array;
}

function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var pivotLoc = lo;
    for (var i = lo; i < hi; i++) {
        if(arr[i] <= pivot) {
            swap(arr, pivotLoc, i);
            pivotLoc++;
        }
    }
    swap(arr, pivotLoc, hi);
    return pivotLoc;
}

function swap(arr, i1, i2) {
    if (i1 === i2) return;
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
console.log(quicksort([5,3,1,4,2,9]));