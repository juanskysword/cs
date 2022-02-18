function isPangram(string){
    let strArr = string.toLowerCase();
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < letters.length; i++) {
      if(strArr.indexOf(letters[i]) < 0){
        return false;
      }
    }
    return true;
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))


/// O(log n) - Logarithmic Time