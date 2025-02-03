function findingKLargest(arr,k) {
    arr.sort((a,b) => a - b);
    return arr[arr.length - k];
}
console.log(findingKLargest([7, 10, 4, 3, 20, 15],2)); // 15

function findingKSmallest(arr,k) {
    arr.sort((a,b)=> {return a - b});
    return arr[k - 1]
}
console.log(findingKSmallest([2,8,10,13,4,7],4)); // 8