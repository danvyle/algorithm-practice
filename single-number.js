// ------------problem-----------

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

//----pseudo code

// I want to evaluate the numbers and see if one is equal to another.
// I can sort the array and evaluate one index value to the next, if it is not equal, i can return the num.

//-----solution
const nums = [4,1,2,1,2,3,4]
function singleNumber() {
    nums.sort();
    for (var i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
};

console.log(singleNumber(nums))


//space and time complexity
// Time complexity : O(n)
//     We search the whole list to find whether there is duplicate number, taking O(n^2) time. 
//     Because search is in the for loop, so we have to multiply both time complexities which is O(n^2)
//Space complexity: O(n)