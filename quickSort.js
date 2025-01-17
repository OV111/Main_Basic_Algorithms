function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; ++i) {
        if(arr[i] > pivot) {
            right.push(arr[i]);
        } 
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];
}
let array = [1,4,5,2,7,13,3,35,9,8,0];
console.log(quickSort(array));