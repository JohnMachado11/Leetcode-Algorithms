// Leetcode #26
// Given a sorted array nums, remove the duplicates in-place such that 
// each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by 
// modifying the input array in-place with O(1) extra memory.


/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {

    for (let i = 0; i < nums.length; i++){  
            if (nums[i] == nums[i + 1]){
                nums.splice(i + 1, 1);
                i -= 1; // resets index position to 0 on loop
            }
        }
        return(nums.length);
    };

console.log(removeDuplicates([1,1,2])) // [1,2]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // [0,1,2,3,4]
