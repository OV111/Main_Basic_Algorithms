function moveZerosToEnd(nums) {
    let pointer = 0
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i] !== 0) {
            [nums[i],nums[pointer] = nums[pointer],nums[i]];
            pointer++;
        }
    } 
    return nums;
}
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1,3,12,0,0]