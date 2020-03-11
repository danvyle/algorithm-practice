// Given a txt File, count all the words and how many times it appears.Array
// output: 

// 1 hello
// 1 world 
// 17 that



const fs = require('fs') 
  
fs.readFile('Input.txt', (err, data) => { 
    if (err) throw err; 
        var temp = data.toString().toLowerCase();
        var words = new Array();
        words = temp.replace(/[.,]/g, '').split(" ");
        sortedWords = words.sort();
    var count = 1;
        function wordCount(sortedWords) {
            var uniqueWords = [];
            uniqueWords = sortedWords; 
            for (var i = 0; i < sortedWords.length; i++) {
                for (var j = 1; j < uniqueWords.length; j++) {
                 if (sortedWords[i] === sortedWords[j]) {
                    count += 1 ;
                    uniqueWords--
                    console.log(count + " " + sortedWords[j]);

                 } else if (sortedWords[i] !== sortedWords[j]) {
                    console.log(count + " " + sortedWords[j]);
                }
            }
        }
    }
    wordCount(sortedWords)
})