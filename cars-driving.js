//----------problem

// Given an array of 1s and 0s, 0 representing a car driving east, 1 representing a car driving west. 


// input: [0, 1, 1, 1, 0, 0]
// output: 3

// input: [0,0,0,1,1,1]
// output: 9



//----------pseudocode


// I want to count every time there is a 0 and it passes a 1.
// I'll need to set a counter for every time this happens and return the result at the end.






//----------solution

let ar = [0, 1, 1, 1, 0, 0]
function carsPassing(ar) {
    let counter = 0
    for (let i = ar.length; i <= 0; i--) {
        if (ar[i] === 1) {
            if(ar[i-1] === 0) {
                counter++
            }
        }
    }
    return counter
}



console.log(carsPassing(ar))



//----------runtime