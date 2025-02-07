function slidingWinMax(nums,k){
    let result = [];
    for(let i = 0; i <= nums.length - k; ++i) { // is special i <= nums.length-k;
        let subArr = nums.slice(i,i+k);
        let maxVal = Math.max(...subArr);   // result.push(Math.max(...nums.slice(i,i+k)));
        result.push(maxVal);
    }
    return result;
}
console.log(slidingWinMax([1,4,8,2,9,0,1,3,4],3)); // [8, 8, 9, 9, 9, 3, 4]
//Alternative Way! Two-Pass Left-Right Max Approach
function slidingWinMax2(arr,k) {

}
console.log(slidingWinMax2([3, 1, 4, 1, 5, 9, 2, 6],3)); // 

//More Advanced with deque(double-ended queue)!
