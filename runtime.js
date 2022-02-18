const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let tinyArrayresultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let tinyArrayresultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", tinyArrayresultsInsert.preciseWords);
console.log("append", tinyArrayresultsAppend.preciseWords);
console.log('-------------------------------')
//--------------------------------------------------------------------

//first function
perf.start();                     
doublerAppend(smallArray);
let smallArrayresultsAppend = perf.stop();  


//second function
perf.start();
doublerInsert(smallArray);
let smallArrayresultsInsert = perf.stop();


console.log('Results for the smallArray');
console.log("insert", smallArrayresultsInsert.preciseWords);
console.log("append", smallArrayresultsAppend.preciseWords);
console.log('-------------------------------')
//--------------------------------------------------------------------

//first function
perf.start();                     
doublerAppend(mediumArray);
let mediumArrayresultsAppend = perf.stop();  


//second function
perf.start();
doublerInsert(mediumArray);
let mediumArrayresultsInsert = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", mediumArrayresultsInsert.preciseWords);
console.log("append", mediumArrayresultsAppend.preciseWords);
console.log('-------------------------------')
//--------------------------------------------------------------------

//first function
perf.start();                     
doublerAppend(largeArray);
let largeArrayresultsAppend = perf.stop();  


//second function
perf.start();
doublerInsert(largeArray);
let largeArrayresultsInsert = perf.stop();


console.log('Results for the largeArray');
console.log("insert", largeArrayresultsInsert.preciseWords);
console.log("append", largeArrayresultsAppend.preciseWords);
console.log('-------------------------------')
//--------------------------------------------------------------------

//first function
perf.start();                     
doublerAppend(extraLargeArray);
let extraLargeArrayresultsAppend = perf.stop();  


//second function
perf.start();
doublerInsert(extraLargeArray);
let extraLargeArrayresultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", extraLargeArrayresultsInsert.preciseWords);
console.log("append", extraLargeArrayresultsAppend.preciseWords);
