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
    let split_num = x.toString().split('')

    for(let i = split_num.length - 1; i <= split_num.length; i--){
        if(i < 0){
            break;
        }
        else if(x == 0){
            return 0;
        }

        if(split_num[i] == "-"){
            result.splice(0, 0, split_num[i]);
        }
        else{
            result.push(split_num[i]);
        }
    }
    
    if(result[0] == 0){
        result.splice(0, 1)
        return result.join("");
    }

    if(result.join("") > Math.pow(2, 31) -1 || result.join("") < Math.pow(-2,31)){
        return 0;
    }
    else{
        return result.join("");
    }
};

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -123
console.log(reverse(120)) // 21
console.log(reverse(0)) // 0

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


