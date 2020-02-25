//----problem 


// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

//-----logic
// I want to do a for loop to iterate and find all the zeroes in the array. 
// If it is a zero, I'll splice it and remove it from the array.
// I'll then push a 0 on to the end of the array. 
// I'll then lower the length of the array by 1 because we don't need to check the 0 i just added. 


//------solution

function moveZeroes(nums) {
    len = nums.length
    for (var i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            len--;
            i--;
        }
    }
    return nums
};

console.log(moveZeroes([0,1,2,3,0,4]))

//-------time and space complexity
// Time O(1) 
// Space O(n)

