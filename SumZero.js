function addToZero (double) {

for (let i = 0; i < double.length; i++) {
    for (let j = 0; j < double.length; j++) {
    let value = false;
      if (i !== j) {
        //Strict not equal
        if (double[i] + double[j] === 0) {
          value = true
          return value
        } 
      }
      console.log(value)
    }   
  }
}

console.log(addToZero([1, 2, 3, -2]))



