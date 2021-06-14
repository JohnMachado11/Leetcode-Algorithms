# Leetcode #27
# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
# The relative order of the elements may be changed.

# Do not allocate extra space for another array. 
# You must do this by modifying the input array in-place with O(1) extra memory.

from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        while val in nums:
            nums.remove(val)
            print(nums)
        
        return len(nums)

print(Solution.removeElement(List, [3,2,2,3], 3)) # 2
print(Solution.removeElement(List, [0,1,2,2,3,0,4,2], 2)) # 5