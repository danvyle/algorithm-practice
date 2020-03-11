//------ Problem

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true


//---------------pseudocode
// I would like to sort the numbers to compare an indexed value to the next indexed value
// this would tell me if there are any duplicates right away
// If there aren't any duplicates, we'll return false.


//---------------solution
var nums = [1,2,3,1]
function containsDuplicate(nums) {
    nums.sort();
    for(let i = 0; i<nums.length-1; i++){
        if(nums[i]==nums[i+1]){
            return true
        }
    }
    return false;
};

console.log(containsDuplicate(nums))
//---------------time and space

// time: O(N)
// space: O(N)
