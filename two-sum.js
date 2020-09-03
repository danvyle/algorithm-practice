// -----problem------
// Given an array of integers nums and and integer target, 
// return the indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1]



// ----solution----

function twoSums(nums, target) {
    const hash = {};
  
    for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
  
      if (difference in hash) {
        return [hash[difference], i];
      }
  
      hash[nums[i]] = i;
    }
  
  };

  ----------runtime--------
//   O(n) space and time