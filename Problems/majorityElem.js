const majorityElem = (nums) =>  {
    for(let i = 0; i < nums.length; ++i) {
        let count = 0; 
        for(let j = 0; j < nums.length; ++j) {
            if(nums[i] === nums[j]) {
                ++count;
            }
        }
        if(count > Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
    return null;
}
console.log(majorityElem([2,2,1,1,1,2,2])); // 2
console.log(majorityElem([3,2,3])); // 3
console.log(majorityElem([1,2,3,4,5,4,4])); // null
//Another Way