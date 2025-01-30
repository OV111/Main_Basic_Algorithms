function bubbleSort(arr) {
    let tmp = 0;
    for(let i = 0; i < arr.length; ++i) {
        for(let j = i + 1; j < arr.length; ++j) {
            if(arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
let array = [2,8,4,9,5,1,10,4,7];
console.log(bubbleSort(array)); // [1,2,4,4,5,7,8,9,10]