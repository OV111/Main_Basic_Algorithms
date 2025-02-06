function slidingWinMax(nums,k){
    let result = [];
    for(let i = 0; i <= nums.length - k; i++) { // is special i <= nums.length-k ;
        let subArr = nums.slice(i,i+k);
        console.log(subArr)
        let maxVal = Math.max(...subArr)
        result.push(maxVal);
    }
    return result;
}
console.log(slidingWinMax([1,4,8,2,9,0,1,3,4],2)); // [ 8, 9, 4 ]
let nums = [1,4,8,2,9,0,1,3,4,5]
console.log(nums.length)


//Alternative Way!
//More Advanced with deque!