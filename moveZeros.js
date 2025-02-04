function moveZerosToEnd(nums) {
    let pointer = 0;
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i] !== 0) {
            [nums[i],nums[pointer]] = [nums[pointer],nums[i]];
            pointer++;
        }
    }
    return nums;
}
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1,3,12,0,0]

//Alternative Way
function moveZerosToEnd2(nums) {
    let zeros = nums.filter(x => x === 0);
    return [...nums.filter(y => y !== 0),...zeros];
}
console.log(moveZerosToEnd2([1,0,3,2,0,7,0,4])); // [1,3,2,7,4,0,0,0]