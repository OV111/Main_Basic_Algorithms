function binarySearch(sortedArr,key) {
    let start = 0;
    let end = sortedArr.length - 1;
    while(end >= start) {
        let middle = Math.floor((start + end) / 2);
        if(sortedArr[middle] == key) {
            return middle;
        } else if(sortedArr[middle] < key) {
            start = middle + 1;
        } else if(sortedArr[middle] > key) {
            end = middle - 1;
        }
    }
    return -1;
}   
let sortedArr = [1,3,7,15,16,27,38,49,50]
console.log(binarySearch(sortedArr,27));   // 5