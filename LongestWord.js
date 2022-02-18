function findLongestWord(array) {
    let longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }

  console.log(findLongestWord(["hi", "hello"]))



  // O(n) - Linear Time