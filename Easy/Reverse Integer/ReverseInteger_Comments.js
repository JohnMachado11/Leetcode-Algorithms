// Leetcode #7
// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let result = [];
    // Take the x input which is an integer, convert it to a string
    // and create an array with each string element seperated by each character.
    // e.g 123 --> "123" --> [1,2,3]
    let split_num = x.toString().split('');
    // Elements of split_num array will be pushed in order from last index to the first index.
    // Variable i is set to the length of the split_num array.
    // e.g. if split_num length = 3, i will be set to 2.
    for(let i = split_num.length - 1; i <= split_num.length; i--){
        // Once i decrements to -1 exit the loop.
        if(i < 0){
            break;
        }
        // Check if a single 0 was inputted as x, if so simply return it.
        else if(x == 0){
            return 0;
        }
        // If on the last loop iteration (0) it finds a "-" (minus/negative sign) in split_num array,
        // it will grab the "-" and put it to the very front of the result array at index 0. 
        // e.g. result = [3,2,1] --> result = [-,3,2,1]
        if(split_num[i] == "-"){
            result.splice(0, 0, split_num[i]);
        }
        // Pushing the elements of the split_num array from back to front into result array. 
        else{
            result.push(split_num[i]);
        }
    }
    // If a 0 is located at index 0 of the result array then remove it. 
    if(result[0] == 0){
        result.splice(0, 1);
        return result.join("");
    }
    // Signed 32-bit integer rule bounds. If the number within the result array is larger
    // than 2,147,483,647 or smaller than -2,147,483,648 then return 0.
    // Else, return the result array and we are done. :D
    if(result.join("") > Math.pow(2, 31) -1 || result.join("") < Math.pow(-2,31)){
        return 0;
    }
    else{
        return result.join("");
    }
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); //21
console.log(reverse(0)); // 0

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0
