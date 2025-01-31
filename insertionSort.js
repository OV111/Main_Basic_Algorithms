function insertionSort(arr) {
    for(let i = 0; i < arr.length; ++i) {
        let val = arr[i];
        let j = i - 1;
        while(arr[j] > val){
            arr[j+1] = arr[j];
            j--;
        }
        
    }
}

let array = [5,2,4,6,1,3];
console.log(insertionSort(array)); // [1,2,3,4,5,6]