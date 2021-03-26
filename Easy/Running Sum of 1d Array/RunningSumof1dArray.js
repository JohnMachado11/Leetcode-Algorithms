// Leetcode #1480
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let new_array = [];
    let storage = 0;
    
    for(let i in nums){
        if(new_array.length == 0){
            storage = nums[i];
            new_array.push(storage);
        }
        else{
            storage += nums[i];
            console.log(storage)
            new_array.push(storage);
        }
    };
    return new_array;
};

console.log(runningSum([1,2,3,4])); 

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
