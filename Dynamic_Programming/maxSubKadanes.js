// My favorite Algorithm
function maxSubSum(arr) {
    let maxSum = -Infinity;
    let currSum = 0;
    for(let i = 0; i < arr.length; ++i) {
        currSum = Math.max(arr[i],currSum + arr[i]);
        maxSum = Math.max(maxSum,currSum);
    }
    return maxSum;
}
console.log(maxSubSum([7,-1,-6,4,3,8]));