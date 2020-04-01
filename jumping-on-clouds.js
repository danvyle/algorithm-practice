//-------problem 

// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers

// Output Format

// Print the minimum number of jumps needed to win the game.

// Sample Input 0

// 7
// 0 0 1 0 0 1 0
// Sample Output 0

// 4

// Explanation 0:
// Emma must avoid  and . She can win the game with a minimum of  jumps:

// jump(2).png

// Sample Input 1

// 6
// 0 0 0 0 1 0
// Sample Output 1

// 3
// Explanation 1:
// The only thundercloud to avoid is . Emma can win the game in  jumps:

//--------problem

function jumpingOnClouds(c) {
    let counter = 0
    let i = 0
    while (i < c.length) {
      if (c[i+2] === 0) {
        i += 2; 
      } else {
        i += 1
      }
      if (i !== c.length) {
        counter++;
        }
    }
    return counter
  }

  console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))

//expected output: 4

//------runtime

// O(N)
// O(N)