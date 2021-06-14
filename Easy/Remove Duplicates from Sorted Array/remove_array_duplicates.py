# Leetcode #26
# Given a sorted array nums, remove the duplicates in-place such that 
# each element appears only once and returns the new length.

# Do not allocate extra space for another array, you must do this by 
# modifying the input array in-place with O(1) extra memory.

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        i = 0
        while i < len(nums):
            try:
                if nums[i] == nums[i + 1]:
                    nums.remove(nums[i + 1])
                else:
                    i += 1
            except IndexError:
                break
        
        return(len(nums))

print(Solution.removeDuplicates(List, [1,1,2]))  # [1,2]
print(Solution.removeDuplicates(List, [0,0,1,1,1,2,2,3,3,4])) # [0,1,2,3,4]