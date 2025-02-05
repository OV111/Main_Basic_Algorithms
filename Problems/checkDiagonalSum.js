function dioganal(arr) {
    let s1 = 0,s2 = 0;
    for(let i = 0; i < arr.length; ++i) {
        s1 += arr[i][i];
        s2 += arr[i][arr.length - 1 - i];  // Starting from last element!   
    }
    return s1 === s2;
}
let array = [
    [1, 4, 5],
    [7, 8, 9],
    [0, 2, 4],
]
console.log(dioganal(array));  // Output - true (13===13)