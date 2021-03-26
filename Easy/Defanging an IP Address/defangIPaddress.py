# Leetcode #1108
# Given a valid (IPv4) IP address, return a defanged version of that IP address.
# A defanged IP address replaces every period "." with "[.]". 

class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace(".", "[.]")

print(Solution.defangIPaddr(str, "1.1.1.1"))

# Example 1:

# Input: address = "1.1.1.1"
# Output: "1[.]1[.]1[.]1"

# Example 2:

# Input: address = "255.100.50.0"
# Output: "255[.]100[.]50[.]0"