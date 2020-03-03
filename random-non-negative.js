// 3. Write a function that returns M random non-negative integers less than some value N. Each integer must also be unique.
// Set is a product of JS ES6 and helps to ensure that there are unique values being input always.

function randomNum(m, n) {  
    var set = new Set();
    const unique = (value, index, self) => {
     return self.indexOf(value) === index
    }
    while (set.size < m) {
        set.add(Math.floor(Math.random() * Math.floor(n)));
    }
    return set
}

console.log(randomNum(3, 8));


