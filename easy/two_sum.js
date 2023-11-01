/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let j = 0; j < nums.length; j++) {
        for (let i = j+1; i < nums.length; i++) {
            if (nums[i] + nums[j] === target) { 
                return [j ,i] 
            }
        }
    }
};
