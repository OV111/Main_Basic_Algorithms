function rotateArray(arr,k) {
    return [...arr.slice(-k,arr.length),...arr.slice(0,-k)];
}
console.log(rotateArray([1,2,3,4,5,6,7],2)); // [5,6,7,1,2,3,4]

//Another way
