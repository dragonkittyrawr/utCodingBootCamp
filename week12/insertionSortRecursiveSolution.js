//===============================================
// RUN THIS USING NODE
//===============================================
//comment out if necessary
/*
'use strict';
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

suite.add('insertion-sort-recursion', function mainSortLoop(){
	mainSortLoop(arr);
})
.on('start',function start(){
	console.log("starting benchmark");
})
.on('complete', function report () {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, 'successful')[0];

    console.log('On average, ' + benchmark.name + ' took ' + benchmark.stats.mean + ' seconds to complete.');
  })
.run()
*/


//================================================
// TEST CASES
//================================================

// // Case 1 - Small Set of Numbers
var arr = [];
for (var i=0, t=40; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}

//Case 2 - Large set of Numbers
// var arr = [];
// for (var i=0, t=400000; i<t; i++) {
//     arr.push(Math.round(Math.random() * t))
// }

//================================================
// SOLUTION - Insertion Sort
//================================================
//swap function copied from previous exercise.
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

//take array and index parameter
function recursiveCheck(arr,j){
	//if current value is less than previous value
	if (arr[j]<arr[j-1]){
		//set j-1 as var for parameter
		var prev = j-1;
		//swap values positions
		swap(arr,j,prev);
		//run recursion, with previous index as new parameter
		recursiveCheck(arr,prev);
	};//end if

};//end recursive

//main loop, one for each item in array
function mainSortLoop(arr){
	for(i=0; i<arr.length;i++){
		//run our value check, pass index as parameter
		recursiveCheck(arr,i);
	};//end loop
	//log result after loop completes
	console.log(arr.join(" "));
};//end main sort


//================================================
// FUNCTION CALL 
//================================================
console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------")
console.log("POST-SORT");
mainSortLoop(arr);
//console.log(mainSortLoop(arr).join(" "));