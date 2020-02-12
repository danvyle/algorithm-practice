// Reverse String
// Easy

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

arr = ['h', 'e', 'l', 'l', 'o']
arr2 = ["H","a","n","n","a","h"]
function reverseString(arr) {
    for (var i = 0; i <= ((arr.length - 1) / 2); i++) {
        let first = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 -i ] = first;
      }
      console.log(arr);
    }


function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    console.log(newArray);
  }

  reverseArray(arr);
  reverseArray(arr2);
  reverseString(arr);


// Time complexity :O(N) to swap N/2 element.

// Space complexity : O(1), it's a constant space solution.
  
