// Divide and conquer
// merge is O(n)
// mergeSort is O(n*logn)

var example = [34,83,10,9,1,4];

function mergeSortRecursive(array) {
    // base case
    if(array.length <= 1) return array;

    // dive and conquer!!
    var leftHalf = array.slice(0,array.length/2);
    var rightHalf = array.slice(array.length/2);
    var leftSorted = mergeSortRecursive(leftHalf);
    var rightSorted = mergeSortRecursive(rightHalf);

    // merge subarrays
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    var result = []; iLeft= 0; iRight= 0;

    // while result is not fully populated
    while(result.length < (left.length + right.length)) {
        if(iLeft === left.length) result = result.concat(right.slice(iRight));
        else if (iRight === right.length) result = result.concat(left.slice(iLeft));
        else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
        else result.push(right[iRight++]);
    }
    return result;
}

console.log(mergeSortRecursive(example));