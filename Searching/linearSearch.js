function linearSearch(arr,n,key) {
    for(let i = 0; i < n; ++i) {
        if(arr[i] == key) {
            return i;
        }
    }
    return -1;
}

function SearchInArr(arr,n,key) {
    let res = linearSearch(arr,n,key);
    if(res == -1) {
        return "Element not found";
    } else {
        return `Element is ${res}`;
    }
}
let arr = [1,4,7,3,9,10,11]; 
let n = arr.length;
console.log(SearchInArr(arr,n,9)); // 4