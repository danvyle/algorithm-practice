//-----problem

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
//-----logic
// If I can split the string up and sort it and compare it that way, I can compare the letters of s to t with a boolean 


//-----solution
function isAnagram(s, t) {
    let newS = s.split("").sort().join("");
    let newT = t.split("").sort().join("");
    if (newS === newT) {
      return true
    } else {
      return false
    }
};

console.log(isAnagram("annalee","nanalee"))
//-----time&space complexity
// Time: O(nlogn)
// Space: O(1)

