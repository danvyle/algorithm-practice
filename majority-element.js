//--------problem
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2
//--------logic
// I want to go through the array and count how many times each element appears.
// I will need to compare it to other elements to see if it is more. 
// At the end, I will return only the element that appears the most.

//--------solution
var arr = [2, 2, 1, 1, 1, 2, 2, 1, 1]
function majorElement(arr) {
    let count = {};
    let curNum;
    let maxNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        curNum = arr[i];

        if(count[curNum] !== undefined) {
            count[curNum]++;
        } else {
            count[curNum] = 1;
        }

        if(count[curNum] > count[maxNum]) {
            maxNum = curNum;
        }
    }
        if(count[maxNum] > arr.length/2) {
            return maxNum;
        }

}

console.log(majorElement(arr))

//--------time and space complexity
//time: O(N)
//Space: O(N)